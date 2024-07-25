import Mock from "mockjs";

Mock.mock("http://localhost:5173/login", "post", (options: any) => {
    const { username, password } = JSON.parse(options.body);
    if (username == "admin" && password == "1") {
        return {
            code: 200,
            message: "success",
            data: {
                token: "tokensdsdsd",
            },
        };
    }
});
