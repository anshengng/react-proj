import { searchType } from "../pages/users";
import { userProps } from "../pages/users/types/columns";
import { get, post } from "../utils/request";

interface loginDataRes {
    //响应数据的data类型
    token: string;
    username: string;
}
interface loginReq {
    //响应数据的参数data类型
    username: string;
    password: string;
}
export interface menuProps {
    key: string;
    label: string;
    icon: string;
    children?: menuProps[];
}
export const login = (url: string, data: loginReq) => {
    return post<loginDataRes>(url, data);
};
export const logout = () => {};
export const getUserInfo = () => {};

export const getMenu = () => {
    return get<menuProps[]>("/menu");
};

interface userRef extends searchType {
    page: number;
    pageSize: number;
}
interface userRes {
    list: userProps[];
    total: number;
}
//获取租户列表
export const getUerList = (data: userRef) => {
    return post<userRes>("/userList", data);
};
