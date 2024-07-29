import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { router } from "./router";
import { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateRouters } from "./utils/generateRouters";
const Dashboard = lazy(() => import("./pages/dashboard"));
function App() {
    const { menuList } = useSelector((state: any) => state.userSlice);
    const [IRouter, setIRouter] = useState<any>(null);
    useEffect(() => {
        setIRouter(createBrowserRouter(router));
        const myRouters: RouteObject[] = generateRouters(menuList); //根据菜单项获取Home下所有路由
        const impRouter: RouteObject[] = [...router]; //基础3个路由解构赋值，拷贝
        impRouter[0].children = myRouters;
        impRouter[0].children.unshift({ index: true, element: <Dashboard /> }); //默认子路由
        const IRouters = createBrowserRouter(impRouter);
        setIRouter(IRouters);
    }, [menuList]);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {IRouter ? <RouterProvider router={IRouter}></RouterProvider> : null}
        </Suspense>
    );
}

export default App;
