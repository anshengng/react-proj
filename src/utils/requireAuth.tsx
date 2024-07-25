import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface IProps {
    allowed: boolean;
    redirectTo: string;
    children: React.ReactNode;
}
//react自定义组件首字母需要大写
export const RequireAuth: React.FC<IProps> = ({ allowed, redirectTo, children }): React.ReactNode => {
    const token = useSelector((state: any) => state.userSlice.token);
    const isLogin: boolean = token ? true : false;
    const navigate = useNavigate();
    useEffect(() => {
        if (allowed !== isLogin) {
            navigate(redirectTo);
        }
    }, [allowed, isLogin, redirectTo]);

    return allowed === isLogin ? <>{children}</> : <></>;
};
