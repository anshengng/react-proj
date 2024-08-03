/**
 * 租户列表
 */
import { Button, Card, Col, Input, message, Row, Table, TableProps, Tag } from "antd";
import { searchType, userProps } from "./types/columns";
import { useCallback, useEffect, useState } from "react";
import { deleteUserApi, getUerList } from "../../apis/users";
import MyUserEditForm from "../../components/myUserEditForm";
import { useDispatch } from "react-redux";
import { setFormData } from "../../store/user";

const UserList = () => {
    const [dataList, setDataList] = useState<userProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(); // 分页总数
    const [selectedRowKeys, setSelectedRowKeys] = useState([]); //选择框的值
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [title,setTitle] = useState<string>('添加企业')
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState<searchType>({
        companyName: "",
        contact: "",
        phone: "",
    });
    //3个搜索框改变
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchData({
            ...searchData,
            [name]: value,
        });
    };
    //初始化搜索，获取列表
    const searchHandler = async (e?: any) => {
        const {
            data: { list, total },
        } = await getUerList(e ?? { page, pageSize, ...searchData });
        setDataList(list);
        setTotal(total);
    };
    const rowSelectionData = {
        selectedRowKeys,
        onChange: function (selectedRowKeys: any) {
            setSelectedRowKeys(selectedRowKeys);
            // console.log(dataList.filter(item=>selectedRowKeys.includes(item.id)));
        },
        onSelect: function (...e: any) {},
        onSelectAll(...e: any) {},
    };
    //分页
    const pagiChangeHandler = (p: number, ps: number) => {
        setPage(p);
        setPageSize(ps); //异步更新
    };
    //重置搜索
    const reset = () => {
        setSearchData({
            companyName: "",
            contact: "",
            phone: "",
        });
        setSelectedRowKeys([]);
        setPage(1);
        setPageSize(10);
        searchHandler({ page: 1, pageSize: 10, companyName: "", contact: "", phone: "" });
        //useState更新是异步的 此时请求数据可能还是旧的,
        //所以只能指定参数
    };

    //useCallback配合React.memo优化
    const hideEditForm = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const addUser = () => {
        setTitle('添加企业')
        dispatch(setFormData({}));
        setIsModalOpen(true);
    };

    const editUser = (record: userProps) => {
        setTitle('编辑企业')
        dispatch(setFormData(record));
        setIsModalOpen(true);
    };

    const delUser = async (record: userProps) => {
        const res = await deleteUserApi(record.id);
        message.success(res.message);
        searchHandler();
    };

    const columns: TableProps<userProps>["columns"] = [
        {
            title: "No.",
            key: "index",
            render(value, record, index) {
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
            render(value: string) {
                if (value === "1") return <Tag color="green">营业中</Tag>;
                if (value === "2") return <Tag color="orange">暂停营业</Tag>;
                if (value === "3") return <Tag color="red">已关闭</Tag>;
                return <Tag>未知</Tag>;
            },
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
            render(value, record) {
                return (
                    <div>
                        <Button
                            size="small"
                            onClick={() => editUser(record)}
                        >
                            编辑
                        </Button>
                        <Button
                            danger
                            size="small"
                            className="ml-4"
                            onClick={() => delUser(record)}
                        >
                            删除
                        </Button>
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        searchHandler(); //useState更新是异步的
    }, [page, pageSize]);

    return (
        <>
            <MyUserEditForm
                title={title}
                isModalOpen={isModalOpen}
                handleCancel={hideEditForm}
            ></MyUserEditForm>
            <Card>
                <Row gutter={16}>
                    <Col
                        span={7}
                        className="flex"
                    >
                        <h1 className="w-20">企业名称：</h1>
                        <Input
                            name="companyName"
                            value={searchData.companyName}
                            onChange={handlerChange}
                        ></Input>
                    </Col>
                    <Col
                        span={7}
                        className="flex"
                    >
                        <h1 className="w-20">联系人：</h1>
                        <Input
                            name="contact"
                            value={searchData.contact}
                            onChange={handlerChange}
                        ></Input>
                    </Col>
                    <Col
                        span={7}
                        className="flex"
                    >
                        <h1 className="w-20">联系电话：</h1>
                        <Input
                            name="phone"
                            value={searchData.phone}
                            onChange={handlerChange}
                        ></Input>
                    </Col>
                    <Col
                        span={3}
                        className="flex gap-4"
                    >
                        <Button
                            type="primary"
                            onClick={() => searchHandler()}
                        >
                            查询
                        </Button>
                        <Button onClick={reset}>重置</Button>
                    </Col>
                </Row>
            </Card>
            <Card className="mt-4 text-right">
                <Button
                    className="mr-4"
                    type="primary"
                    onClick={addUser}
                >
                    新增企业
                </Button>
                <Button
                    type="primary"
                    danger
                    disabled={selectedRowKeys.length === 0}
                >
                    批量删除
                </Button>
            </Card>
            <Table
                rowSelection={rowSelectionData}
                dataSource={dataList}
                columns={columns as any}
                rowKey={(record) => record.id}
                pagination={{ total: total, onChange: pagiChangeHandler, current: page, pageSize: pageSize }}
            />
        </>
    );
};

export default UserList;
