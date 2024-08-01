import { Button, TableProps } from "antd";

export interface userProps {
    id: string;
    name: string;
    status: string;
    tel: number;
    business: string;
    email: string;
    creditCode: string;
    industryNum: string;
    organizationCode: string;
    legalPerson: string;
}
export interface searchType {
    companyName: string;
    contact: string;
    phone: string;
}

const columns: TableProps<userProps>["columns"] = [
    {
        title: "No.",
        key: "index",
        render(text, record, index) {
            return index + 1;
        },
    },
    {
        title: "客户名称",
        key: "name",
        dataIndex: "name",
    },
    {
        title: "经营状态",
        key: "status",
        dataIndex: "status",
    },
    {
        title: "联系电话",
        key: "tel",
        dataIndex: "tel",
    },
    {
        title: "所属行业",
        key: "business",
        dataIndex: "business",
    },
    {
        title: "邮箱",
        key: "email",
        dataIndex: "email",
    },
    {
        title: "统一信用代码",
        key: "creditCode",
        dataIndex: "creditCode",
    },
    {
        title: "工商注册号",
        key: "industryNum",
        dataIndex: "industryNum",
    },
    {
        title: "组织结构代码",
        key: "organizationCode",
        dataIndex: "organizationCode",
    },
    {
        title: "法人名",
        key: "legalPerson",
        dataIndex: "legalPerson",
    },
    {
        title: "操作",
        key: "operate",
        render() {
            return (
                <div>
                    <Button size="small">编辑</Button>
                    <Button
                        danger
                        size="small"
                        className="ml-4"
                    >
                        删除
                    </Button>
                </div>
            );
        },
    },
];
export default columns;
