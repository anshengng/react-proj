import { Layout, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { getMenu, menuProps } from "../apis/users";
import icons from "../enums/iconList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "../store/user";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const mapMenuItems = (items: menuProps[]): any => {
    return items.map((item: menuProps) => ({
        label: item.label,
        key: item.key,
        icon: icons[item.icon],
        children: item.children ? mapMenuItems(item.children) : null,
    }));
};
const NavLeft = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false); //侧边栏伸缩
    const [menuList, setMenuList] = useState<MenuItem[]>([]);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const getMenuData = async () => {
        const res = await getMenu();
        const cacheData: MenuItem[] = mapMenuItems(res.data);
        setMenuList(cacheData);
        dispatch(setMenu(res.data)); //redux非序列化检测，redux中尽量不存ReactNode(icon: <xxxx/>)
    };
    const menuClickHandler: MenuProps["onClick"] = (e) => {
        navigation(e.key);
    };
    useEffect(() => {
        getMenuData();
    }, []);
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
                items={menuList}
                onClick={menuClickHandler}
            />
        </Sider>
    );
};

export default NavLeft;
