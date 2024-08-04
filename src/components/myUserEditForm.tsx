import { Input, Modal, Row, Col, Form, Radio } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { editUserApi } from "../apis/users";
interface IProps {
    title: string;
    isModalOpen: boolean;
    handleCancel: () => void;
}
const MyUserEditForm: React.FC<IProps> = React.memo(({ title, isModalOpen, handleCancel }) => {
    // const [form] = isModalOpen?Form.useForm():[];
    //当isModalOpen为false时才渲染，会提示Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?
    const [form] = Form.useForm();
    const { editFormData } = useSelector((state: any) => state.userSlice);

    //请求应该在父组件中处理  TODO待优化
    const submitForm = () => {
        form.validateFields()
            .then(async (res) => {
                res.id = editFormData.id; //如果是新增则没有id,需要调用addUserApi的接口
                const result = await editUserApi(res);
                console.log(result);
            })
            .catch((err) => {});
    };
    useEffect(() => {
        form.resetFields();
        form.setFieldsValue(editFormData);
    });
    return (
        <Modal
            title={title}
            open={isModalOpen}
            onCancel={handleCancel}
            width={800}
            onOk={submitForm}
        >
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="客户名称"
                            name="name"
                            rules={[{ required: true, message: "客户名称不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="联系电话"
                            name="tel"
                            rules={[
                                { required: true, message: "联系电话不能为空" },
                                { pattern: /^1[3-9]\d{9}$/, message: "请输入有效的手机号" },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="经营状态"
                            name="status"
                            rules={[{ required: true, message: "经营状态不能为空" }]}
                        >
                            <Radio.Group>
                                <Radio value="1">营业中</Radio>
                                <Radio value="2">暂停营业</Radio>
                                <Radio value="3">已关闭</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="所属行业"
                            name="business"
                            rules={[{ required: true, message: "所属行业不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="邮箱"
                            name="email"
                            rules={[{ required: true, message: "邮箱不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="统一信用代码"
                            name="creditCode"
                            rules={[{ required: true, message: "统一信用代码不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="工商注册号"
                            name="industryNum"
                            rules={[{ required: true, message: "工商注册号不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="组织机构代码"
                            name="organizationCode"
                            rules={[{ required: true, message: "组织机构代码不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="法人名"
                            name="legalPerson"
                            rules={[{ required: true, message: "法人名不能为空" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
});

export default MyUserEditForm;
