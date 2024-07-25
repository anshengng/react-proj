import { post } from "../utils/request";

interface loginDataRes {
    //响应数据的data类型
    token: string;
}
interface loginReq {
    //响应数据的参数data类型
    username: string;
    password: string;
}
export const login = (url: string, data: loginReq) => {
    return post<loginDataRes>(url, data);
};
export const logout = () => {};
export const getUserInfo = () => {};
