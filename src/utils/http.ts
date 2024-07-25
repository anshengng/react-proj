import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:5173",
    timeout: 5000,
});

http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default http;
