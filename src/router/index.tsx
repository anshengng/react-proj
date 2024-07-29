import { RouteObject } from "react-router-dom";
import { RequireAuth } from "../utils/requireAuth";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login"));
const NotFound = lazy(() => import("../pages/notFound"));

export const router: RouteObject[] = [
    {
        path: "/",
        element: (
            <RequireAuth
                allowed={true}
                redirectTo="/login"
            >
                <Home />
            </RequireAuth>
        ),
        children: [
            // {
            //     index: true,
            //     element: <Dashboard />, //index:true 默认渲染。path: ''
            // },
        ],
    },
    {
        path: "/login",
        element: (
            <RequireAuth
                allowed={false}
                redirectTo="/"
            >
                <Login />
            </RequireAuth>
        ),
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
