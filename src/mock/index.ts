import Mock from "mockjs";

Mock.mock("http://localhost:5173/login", "post", (options: any) => {
    const { username, password } = JSON.parse(options.body);
    if (username == "user" && password == "1") {
        return {
            code: 200,
            message: "success",
            data: {
                token: "tokenuser",
                username: "user",
            },
        };
    } else if (username == "admin" && password == "1") {
        return {
            code: 200,
            message: "success",
            data: {
                token: "tokenadmin",
                username: "admin",
            },
        };
    } else if (username == "manager" && password == "1") {
        return {
            code: 200,
            message: "success",
            data: {
                token: "tokenmanager",
                username: "manager",
            },
        };
    } else {
        return {
            code: 401,
            message: "账号或密码错误！",
            data: null,
        };
    }
});
// Mock.setup({
//     timeout: "200-500",
// });
const menuList = [
    {
        icon: "DashboardOutlined",
        label: "工作台",
        key: "/dashboard",
    },
    {
        icon: "TeamOutlined",
        label: "租户管理",
        key: "/users",
        children: [
            {
                icon: "UnorderedListOutlined",
                label: "租户列表",
                key: "/users/list",
            },
            {
                icon: "UserAddOutlined",
                label: "新增租户",
                key: "/users/add",
            },
        ],
    },
    {
        icon: "LaptopOutlined",
        label: "物业管理",
        key: "/estate",
        children: [
            {
                icon: "InsertRowLeftOutlined",
                label: "楼宇管理",
                key: "/estate/tenement",
            },
            {
                icon: "BankOutlined",
                label: "房间管理",
                key: "/estate/room",
            },
            {
                icon: "TruckOutlined",
                label: "车辆信息",
                key: "/estate/car",
            },
        ],
    },
    {
        icon: "ToolOutlined",
        label: "报修管理",
        key: "/repair",
    },
    {
        icon: "DollarOutlined",
        label: "财务管理",
        key: "/finance",
        children: [
            {
                icon: "ProfileOutlined",
                label: "合同管理",
                key: "/finance/contract",
            },
            {
                icon: "FrownOutlined",
                label: "合同详情",
                key: "/finance/contractDetail",
            },
            {
                icon: "FileTextOutlined",
                label: "账单管理",
                key: "/finance/bill",
            },
        ],
    },
    {
        icon: "TransactionOutlined",
        label: "招商管理",
        key: "/merchants",
    },
    {
        icon: "FundProjectionScreenOutlined",
        label: "运营管理",
        key: "/operation",
        children: [
            {
                icon: "FundViewOutlined",
                label: "运营总览",
                key: "/operation/all",
            },
            {
                icon: "ReadOutlined",
                label: "文章发布",
                key: "/operation/article",
            },
            {
                icon: "CommentOutlined",
                label: "内容评论",
                key: "/operation/comments",
            },
        ],
    },
    {
        icon: "ToolOutlined",
        label: "设备管理",
        key: "/equipment",
    },
    {
        icon: "ThunderboltOutlined",
        label: "能源消耗",
        key: "/energy",
    },
    {
        icon: "SettingOutlined",
        label: "系统设置",
        key: "/settings",
    },
    {
        icon: "UserOutlined",
        label: "个人中心",
        key: "/personal",
    },
];

const userMenuList = [
    {
        icon: "DashboardOutlined",
        label: "工作台",
        key: "/dashboard",
    },
    {
        icon: "TeamOutlined",
        label: "租户管理",
        key: "/users",
        children: [
            {
                icon: "UnorderedListOutlined",
                label: "租户列表",
                key: "/users/list",
            },
            {
                icon: "UserAddOutlined",
                label: "新增租户",
                key: "/users/add",
            },
        ],
    },
    {
        icon: "LaptopOutlined",
        label: "物业管理",
        key: "/estate",
        children: [
            {
                icon: "InsertRowLeftOutlined",
                label: "楼宇管理",
                key: "/estate/tenement",
            },
            {
                icon: "BankOutlined",
                label: "房间管理",
                key: "/estate/room",
            },
            {
                icon: "TruckOutlined",
                label: "车辆信息",
                key: "/estate/car",
            },
        ],
    },
    {
        icon: "ToolOutlined",
        label: "报修管理",
        key: "/repair",
    },
    {
        icon: "ToolOutlined",
        label: "设备管理",
        key: "/equipment",
    },
    {
        icon: "ThunderboltOutlined",
        label: "能源消耗",
        key: "/energy",
    },
    {
        icon: "UserOutlined",
        label: "个人中心",
        key: "/personal",
    },
];

const managerMenuList = [
    {
        icon: "DashboardOutlined",
        label: "工作台",
        key: "/dashboard",
    },
    {
        icon: "TeamOutlined",
        label: "租户管理",
        key: "/users",
        children: [
            {
                icon: "UnorderedListOutlined",
                label: "租户列表",
                key: "/users/list",
            },
            {
                icon: "UserAddOutlined",
                label: "新增租户",
                key: "/users/add",
            },
        ],
    },
    {
        icon: "LaptopOutlined",
        label: "物业管理",
        key: "/estate",
        children: [
            {
                icon: "InsertRowLeftOutlined",
                label: "楼宇管理",
                key: "/estate/tenement",
            },
            {
                icon: "BankOutlined",
                label: "房间管理",
                key: "/estate/room",
            },
            {
                icon: "TruckOutlined",
                label: "车辆信息",
                key: "/estate/car",
            },
        ],
    },
    {
        icon: "ToolOutlined",
        label: "报修管理",
        key: "/repair",
    },
    {
        icon: "TransactionOutlined",
        label: "招商管理",
        key: "/merchants",
    },
    {
        icon: "FundProjectionScreenOutlined",
        label: "运营管理",
        key: "/operation",
        children: [
            {
                icon: "FundViewOutlined",
                label: "运营总览",
                key: "/operation/all",
            },
            {
                icon: "ReadOutlined",
                label: "文章发布",
                key: "/operation/article",
            },
            {
                icon: "CommentOutlined",
                label: "内容评论",
                key: "/operation/comments",
            },
        ],
    },
    {
        icon: "ToolOutlined",
        label: "设备管理",
        key: "/equipment",
    },
    {
        icon: "ThunderboltOutlined",
        label: "能源消耗",
        key: "/energy",
    },
    {
        icon: "SettingOutlined",
        label: "系统设置",
        key: "/settings",
    },
    {
        icon: "UserOutlined",
        label: "个人中心",
        key: "/personal",
    },
];

Mock.mock("http://localhost:5173/menu", "get", (options: any) => {
    const token = localStorage.getItem("token");
    if (token == "tokenuser") {
        return {
            code: 200,
            message: "success",
            data: userMenuList,
        };
    }
    if (token == "tokenadmin") {
        return {
            code: 200,
            message: "success",
            data: menuList,
        };
    }
    if (token == "tokenmanager") {
        return {
            code: 200,
            message: "success",
            data: managerMenuList,
        };
    }
    return {
        code: 401,
        message: "token失效，请重新登录！",
        data: null,
    };
});
//菜单接口

//dashboard里 图表接口
Mock.mock("http://localhost:5173/energyData", "get", () => {
    return {
        code: 200,
        message: "请求成功",
        data: [
            { name: "煤", data: [120, 132, 101, 134, 90, 230, 210] },
            { name: "气", data: [220, 182, 191, 234, 290, 330, 310] },
            { name: "油", data: [150, 232, 201, 154, 190, 330, 410] },
            { name: "电", data: [320, 332, 301, 334, 390, 330, 320] },
            { name: "热", data: [820, 932, 901, 934, 1290, 1330, 1320] },
        ],
    };
});

Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ["13", "14", "15", "16", "17", "18", "19"]; // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{9}/); //Number()
    },
});

//租户列表的接口
Mock.mock("http://localhost:5173/userList", "post", (options: any) => {
    const { pageSize, page, companyName, contact, phone } = JSON.parse(options.body);
    console.log("租户列表接收到参数", page, pageSize, companyName, contact, phone);
    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [
                {
                    id: "@string('number',5)", //随机生成一个六位数字id
                    name: "@cname", //随机生成一个人名
                    "status|1": ["1", "2", "3"],
                    tel: "@phone",
                    "business|1": ["制造业", "互联网", "新媒体", "美业", "新能源", "物流", "电商"],
                    email: "@email",
                    creditCode: "@string('number',18)",
                    industryNum: "@string('number',15)",
                    organizationCode: "@string('upper',9)",
                    legalPerson: "@cname",
                },
            ],
            total: 78,
        }),
    };
});

//删除企业
Mock.mock("http://localhost:5173/deleteUser", "post", (options: any) => {
    const { id } = JSON.parse(options.body);
    console.log("删除企业", id);
    return {
        code: 200,
        message: "成功",
        data: "操作成功",
    };
});

//批量删除企业
Mock.mock("http://localhost:5173/batchDeleteUser", "post", (options: any) => {
    const { ids } = JSON.parse(options.body);
    console.log("ids", ids);
    return {
        code: 200,
        message: "成功",
        data: "操作成功",
    };
});
//编辑企业
Mock.mock("http://localhost:5173/editUser", "post", (options: any) => {
    console.log("编辑企业收到参数", JSON.parse(options.body));
    return {
        code: 200,
        message: "成功",
        data: "操作成功",
    };
});
//获取房间列表的接口
function generateRooms() {
    const rooms = [];
    for (let i = 0; i < 50; i++) {
        const floor = 1 + Math.floor(i / 6); // 每6个房间一层
        const roomNumber = floor * 100 + (101 + (i % 6)); // 计算房间号
        rooms.push({
            roomNumber,
            decorationType: Mock.Random.pick(["毛坯", "精装"]),
            area: Mock.Random.integer(70, 300),
            unitPrice: Mock.Random.integer(1, 3),
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        });
    }
    return rooms;
}
Mock.mock("http://localhost:5173/roomList", "post", (options: any) => {
    console.log("收到房间id", JSON.parse(options.body).roomid);
    return {
        code: 200,
        message: "成功",
        data: {
            rooms: generateRooms(),
        },
    };
});

//合同管理
Mock.mock("http://localhost:5173/contractList", "post", (options: any) => {
    const { page, pageSize } = JSON.parse(options.body);
    console.log("后端合同管理接到参数", JSON.parse(options.body));
    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [
                {
                    contractNo: '@string("number", 6)',
                    "type|1": ["租赁合同", "自定义合同", "购买合同"],
                    "name|1": ["房屋租赁合同通用模版", "车位租赁合同通用模版", "商业房产买卖合同"],
                    "startDate|1": ["2023-01-01", "2023-03-05", "2023-04-01"],
                    "endDate|1": ["2024-01-01", "2024-03-05", "2024-04-01"],
                    "jia|1": ["万物科技有限公司", "大鱼网络科技", "六六信息技术有限公司"],
                    yi: "天明物业有限公司",
                    "status|1": ["1", "2", "3"],
                },
            ],
            total: 54,
        }),
        // 生成55条数据
    };
});

//账单管理
Mock.mock("http://localhost:5173/billList", "post", (options: any) => {
    const { page, pageSize, companyName, contact, phone } = JSON.parse(options.body);
    console.log("后端账单管理接到参数", JSON.parse(options.body));
    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [
                {
                    accountNo: '@string("number", 6)',
                    "status|1": ["1", "2"],
                    "roomNo|1": ["A1幢写字楼-201", "B1幢写字楼-402", "B2幢写字楼-701", "C2幢写字楼-1601"],
                    "carNo|1": ["B109", "C227", "C106", "D158"],
                    "tel|1": ["@phone"],
                    "costName1|1": [1278.0, 2633.0, 3698.0],
                    costName2: "200元/月",
                    "costName3|1": ["25800/年", "19800/年"],
                    startDate: "2023-01-01",
                    endDate: "2024-01-01",
                    preferential: 0.0,
                    money: 26000.0,
                    "pay|1": ["微信", "支付宝", "现金", "银行卡转账"],
                },
            ],
            total: 54,
        }),
        // 生成55条数据
    };
});
//账号管理
Mock.mock("http://localhost:5173/accountList", "post", (options: any) => {
    //  const {page,pageSize,companyName,contact,phone}=JSON.parse(options.body);
    console.log("后端账号管理接到参数", options);
    return {
        code: 200,
        message: "成功",
        data: {
            list: [
                {
                    id: 1001,
                    accountName: "xuchao",
                    auth: "admin",
                    person: "徐超",
                    tel: "188888888888",
                    department: "总裁办",
                    menu: menuList,
                },
                {
                    id: 1002,
                    accountName: "user01",
                    auth: "user",
                    person: "王丽丽",
                    tel: "17777777777",
                    department: "网推部",
                    menu: userMenuList,
                },
                {
                    id: 1003,
                    accountName: "manager01",
                    auth: "manager",
                    person: "刘伟",
                    tel: "16666666666",
                    department: "财务部",
                    menu: managerMenuList,
                },
                {
                    id: 1004,
                    accountName: "user02",
                    auth: "customize",
                    person: "张安定",
                    tel: "15555555555",
                    department: "企划部",
                    menu: managerMenuList,
                },
                {
                    id: 1005,
                    accountName: "laowang",
                    auth: "user",
                    person: "王大大",
                    tel: "14444444444",
                    department: "总裁办",
                    menu: userMenuList,
                },
            ],
            total: 5,
        },
    };
});
//账单管理
Mock.mock("http://localhost:5173/equipmentList", "post", (options: any) => {
    const { page, pageSize, name, person } = JSON.parse(options.body);
    console.log("后端账单管理接到参数", JSON.parse(options.body));
    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [
                {
                    id: '@string("number", 6)',
                    no: '@string("number", 6)',
                    name: "200元/月",
                    person: ["25800/年", "19800/年"],
                    tel: "@string('number',11)",
                    time: "2024-01-01",
                    rest: "2024-01-02",
                    "status|1": ["1", "2"],
                    last: "2024-01-03",
                    type: "222",
                    from: "china",
                },
            ],
            total: 54,
        }),
        // 生成55条数据
    };
});
