import { Layout } from "antd";
import NavLeft from "../../components/NavLeft";
import MyHeader from "../../components/MyHeader";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import { Outlet, useLocation, useMatch, useMatches } from "react-router-dom";
import { useEffect } from "react";

const { Content } = Layout;

const Home = () => {
    const location = useLocation();
    const match = useMatches();
    useEffect(() => {
        console.log(match);
    }, []);
    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <NavLeft></NavLeft>
                <Layout>
                    <MyHeader></MyHeader>
                    <Content style={{ margin: "0 16px" }}>
                        <MyBreadcrumb></MyBreadcrumb>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Home;
