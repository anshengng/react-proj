import React, { lazy } from "react";
const Dashboard = lazy(() => import("../pages/dashboard"));
const UserList = lazy(() => import("../pages/users"));
const AddUser = lazy(() => import("../pages/users/addUser"));
const Tenement = lazy(() => import("../pages/estate/tenement"));
const Room = lazy(() => import("../pages/estate/room"));
const Car = lazy(() => import("../pages/estate/car"));
const Repair = lazy(() => import("../pages/repair"));
const Contract = lazy(() => import("../pages/finance/contract"));
const ContractDetail = lazy(() => import("../pages/finance/contractDetail"));
const Bill = lazy(() => import("../pages/finance/bill"));
const Merchants = lazy(() => import("../pages/merchants"));
const All = lazy(() => import("../pages/operation/all"));
const Article = lazy(() => import("../pages/operation/article"));
const Comments = lazy(() => import("../pages/operation/comment"));
const Equipment = lazy(() => import("../pages/equipment"));
const Enengy = lazy(() => import("../pages/energy"));
const Settings = lazy(() => import("../pages/home/setting"));
const Personal = lazy(() => import("../pages/home/personal"));

//[key:string]:React.ReactNode
export const routerMap: Record<string, React.ReactNode> = {
    "/dashboard": <Dashboard />,
    "/users/list": <UserList />,
    "/users/add": <AddUser />,
    "/estate/tenement": <Tenement />,
    "/estate/room": <Room />,
    "/estate/car": <Car />,
    "/repair": <Repair />,
    "/finance/contract": <Contract />,
    "/finance/contractDetail": <ContractDetail />,
    "/finance/bill": <Bill />,
    "/merchants": <Merchants />,
    "/operation/all": <All />,
    "/operation/article": <Article />,
    "/operation/comments": <Comments />,
    "/equipment": <Equipment />,
    "/energy": <Enengy />,
    "/settings": <Settings />,
    "/personal": <Personal />,
};
