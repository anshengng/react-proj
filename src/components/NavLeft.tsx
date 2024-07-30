import { Layout, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import icons from "../enums/iconList";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuProps } from "../apis/users";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const NavLeft = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false); //侧边栏伸缩
    const [menus, setMenus] = useState<MenuItem[]>([]);
    const navigation = useNavigate();
    const { menuList } = useSelector((state: any) => state.userSlice);
    const location = useLocation();
    const mapMenuItems = (items: menuProps[]): any => {
        return items.map((item: menuProps) => ({
            label: item.label,
            key: item.key,
            icon: icons[item.icon],
            children: item.children ? mapMenuItems(item.children) : null,
        }));
    };
    const getMenuData = () => {
        const cacheData: MenuItem[] = mapMenuItems(menuList); //将原数组的icon(string)转为<icon/>
        setMenus(cacheData);
    };
    const menuClickHandler: MenuProps["onClick"] = (e) => {
        navigation(e.key);
    };
    useEffect(() => {
        getMenuData();
    }, [menuList]);
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <div className="demo-logo-vertical h-16 bg-cyan-200">logo</div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["/dashboard"]}
                mode="inline"
                items={menus}
                onClick={menuClickHandler}
                selectedKeys={[location.pathname]}
            />
        </Sider>
    );
};

export default NavLeft;
