/**
 * 租户列表
 */
import { Button, Card, Col, Input, Row, Table } from "antd";
import columns, { searchType, userProps } from "./types/columns";
import { useEffect, useState } from "react";
import { getUerList } from "../../apis/users";

const UserList = () => {
    const [dataList, setDataList] = useState<userProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchData, setSearchData] = useState<searchType>({
        companyName: "",
        contact: "",
        phone: "",
    });
    const [total, setTotal] = useState<number>(); // 分页总数
    //3个搜索框改变
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchData({
            ...searchData,
            [name]: value,
        });
    };
    //搜索，获取列表
    const searchHandler = async () => {
        const {
            data: { list, total },
        } = await getUerList({ page, pageSize, ...searchData });
        setDataList(list);
        setTotal(total);
    };
    const rowSelectionData = {
        onSelect: function (...e: any) {
            console.log(e);
        },
        onSelectAll(...e: any) {
            console.log(e);
        },
    };
    //分页
    const pagiChangeHandler = (p: number, ps: number) => {
        setPage(p);
        setPageSize(ps); //异步更新
    };
    useEffect(() => {
        searchHandler();
    }, [page, pageSize]); //useState更新是异步的
    return (
        <>
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
                        <Button type="primary">查询</Button>
                        <Button>重置</Button>
                    </Col>
                </Row>
            </Card>
            <Card className="mt-4 text-right">
                <Button
                    className="mr-4"
                    type="primary"
                >
                    新增企业
                </Button>
                <Button
                    type="primary"
                    danger
                >
                    批量删除
                </Button>
            </Card>
            <Table
                rowSelection={rowSelectionData}
                dataSource={dataList}
                columns={columns as any}
                rowKey={(record) => record.id}
                pagination={{ total: total, onChange: pagiChangeHandler }}
            />
            ;
        </>
    );
};

export default UserList;
