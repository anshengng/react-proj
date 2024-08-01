import { Layout } from "antd";
import NavLeft from "../../components/NavLeft";
import MyHeader from "../../components/MyHeader";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const Home = () => {
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
