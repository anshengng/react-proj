import { createBrowserRouter } from "react-router-dom";
import { RequireAuth } from "../utils/requireAuth";
import React from "react";

const Home = React.lazy(() => import("../pages/home/Home"));
const Login = React.lazy(() => import("../pages/login"));
const NotFound = React.lazy(() => import("../pages/notFound"));
const Dashboard = React.lazy(() => import("../pages/home/dashboard"));

const router = createBrowserRouter([
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
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
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
]);

export default router;
