/**
 * 根据菜单项获取所有路由
 */
import { RouteObject } from "react-router-dom";
import { menuProps } from "../apis/users";
import { routerMap } from "../enums/routerMap";

export const generateRouters = (menu: menuProps[]): RouteObject[] => {
    return menu.map((item: menuProps) => {
        const result: RouteObject = {
            path: item.key,
            element: item.children ? null : routerMap[item.key],
        };
        if (item.children) {
            result.children = generateRouters(item.children);
        }
        return result;
    });
};
