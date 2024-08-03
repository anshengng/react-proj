import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { router } from "./router";
import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRouters } from "./utils/generateRouters";
import { getMenu } from "./apis/users";
import { setMenu } from "./store/user";
const Dashboard = lazy(() => import("./pages/dashboard"));
function App() {
    const { token } = useSelector((state: any) => state.userSlice);
    const [IRouter, setIRouter] = useState<any>(null);
    const dispatch = useDispatch();

    const getMenuData = async () => {
        const { data } = await getMenu();
        if (data) {
            dispatch(setMenu(data)); //redux非序列化检测，redux中尽量不存ReactNode(icon: <xxxx/>)
            const myRouters: RouteObject[] = generateRouters(data); //根据菜单项获取Home下所有路由
            const impRouter: RouteObject[] = [...router]; //基础3个路由解构赋值，拷贝
            impRouter[0].children = myRouters;
            impRouter[0].children.unshift({ index: true, element: <Dashboard /> }); //默认子路由
            setIRouter(createBrowserRouter(impRouter));
        } else {
            setIRouter(createBrowserRouter(router));
        }
    };
    useEffect(() => {
        getMenuData(); //app->home,/users/list刷新后->404
    }, [token]);

    if (IRouter) {
        return (
            // 路由懒加载过程添加loading
            <Suspense fallback={<div>Loading...</div>}> 
                <RouterProvider router={IRouter}></RouterProvider>
            </Suspense>
        );
    } else {
        return <div>Loading1...</div>;
    }
}

export default App;
