import { Breadcrumb } from "antd";
import { menuProps } from "../apis/users";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//Omit省略属性Omit<menuProps, "key" | "icon">[]
const findLabel = (path: string, menuList: menuProps[]): { title: string }[] => {
    let breadcrumbData = [];
    const cache = menuList.filter((item) => item.key.split("/")[1] == path.split("/")[1])[0];
    breadcrumbData.push({ title: cache?.label });
    if (cache?.children) {
        const childrenCache = cache.children.filter((item) => item.key.split("/")[2] == path.split("/")[2])[0];
        breadcrumbData.push({ title: childrenCache?.label });
    }
    return breadcrumbData;
};
const MyBreadcrumb = () => {
    const { menuList } = useSelector((state: any) => state.userSlice);
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);
    const localtion = useLocation();
    useEffect(() => {
        const res = findLabel(localtion.pathname, menuList) as any;
        setBreadcrumbItems(res);
    }, [localtion]);
    return (
        <Breadcrumb
            style={{ margin: "16px 0" }}
            items={breadcrumbItems}
        ></Breadcrumb>
    );
};

export default MyBreadcrumb;
