import { get, post } from "../utils/request";

interface loginDataRes {
    //响应数据的data类型
    token: string;
}
interface loginReq {
    //响应数据的参数data类型
    username: string;
    password: string;
}
export interface menuProps {
    key: string;
    label: string;
    icon?: any;
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
