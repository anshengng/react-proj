//二次封装http

import http from "./http";

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

export function get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    return http.get(url, { params });
}

export function post<T>(url: string, data: Record<string, any>): Promise<ApiResponse<T>> {
    return http.post(url, data);
}
