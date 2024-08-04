import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import store from "../store";
import { message } from "antd";

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:5173",
    timeout: 5000,
});

http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        config.headers["Authorization"] = "Bearer " + store.getState().userSlice.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.data.code !== 200) {
            message.error(`${response.data.code}: ${response.data.message}`);
            // return Promise.reject(response.data); 会阻塞APP.tsx中基础3个路由的生成，导致无法跳转login
        }
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default http;
