import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { useForm } from "antd/es/form/Form";
import { login } from "../../apis/users";
import { useDispatch } from "react-redux";
import { setName, setToken } from "../../store/user";

interface IProps {
    //声明props类型
}

const Login: React.FC<IProps> = () => {
    const [form] = useForm();
    const dispatch = useDispatch();
    const loginHandler = () => {
        form.validateFields()
            .then((res) => {
                login("/login", res).then((res) => {
                    dispatch(setToken(res.data.token));
                    dispatch(setName(res.data.username))
                    localStorage.setItem("username",res.data.username)
                });
            })
            .catch(() => {});
    };
    return (
        <div className="relative w-screen h-screen">
            <img
                className="absolute w-full h-full"
                src="/src/assets/bg.jpg"
                alt=""
            />
            <div className="w-[1100px] h-[600px] absolute top-0 left-0 right-0 bottom-0 m-auto grid grid-cols-3">
                <img
                    src="/src/assets/lgbg.jpg"
                    alt=""
                    className="col-span-2"
                />
                <div className="bg-white h-full flex flex-col justify-center items-center">
                    <img
                        src="/src/assets/logo.png"
                        className="w-14 h-14"
                        alt=""
                    />
                    <div className="text-lg mb-8">智慧园区</div>
                    <div>
                        <Form form={form}>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: "用户名不能为空" }]}
                            >
                                <Input
                                    placeholder="请输入您的账号"
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: "密码不能为空" }]}
                            >
                                <Input.Password
                                    placeholder="请输入您的密码"
                                    prefix={<LockOutlined />}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="w-full"
                                    onClick={loginHandler}
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
