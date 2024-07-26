import { Breadcrumb } from "antd";

const MyBreadcrumb = () => {
    return (
        <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "首页" }, { title: "应用中心" }]}
        ></Breadcrumb>
    );
};

export default MyBreadcrumb;
