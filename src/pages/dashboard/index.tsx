import { PieChartOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import ReactEcharts from "echarts-for-react";
const Dashboard = () => {
    const data = [];
    for (let i = 0; i <= 360; i++) {
        let t = (i / 180) * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
    }
    const option = {
        title: {
            text: "Two Value-Axes in Polar",
        },
        legend: {
            data: ["line"],
        },
        polar: {
            center: ["50%", "54%"],
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
            },
        },
        angleAxis: {
            type: "value",
            startAngle: 0,
        },
        radiusAxis: {
            min: 0,
        },
        series: [
            {
                coordinateSystem: "polar",
                name: "line",
                type: "line",
                showSymbol: false,
                data: data,
            },
        ],
        animationDuration: 2000,
    };
    return (
        <>
            <Row gutter={16}>
                <Col span={6}>
                    <Card className="clearfix h-32">
                        <div className="fl">
                            <h1 className="text-2xl font-bold">13488</h1>
                            <span>园区总面积(平方米)</span>
                        </div>
                        <div className="fr text-6xl">
                            <PieChartOutlined className="text-yellow-300" />
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="clearfix h-32">
                        <div className="fl">
                            <h1 className="text-2xl font-bold">13488</h1>
                            <span>园区总面积(平方米)</span>
                        </div>
                        <div className="fr text-6xl">
                            <PieChartOutlined className="text-yellow-300" />
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="clearfix h-32">
                        <div className="fl">
                            <h1 className="text-2xl font-bold">13488</h1>
                            <span>园区总面积(平方米)</span>
                        </div>
                        <div className="fr text-6xl">
                            <PieChartOutlined className="text-yellow-300" />
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="clearfix h-32">
                        <div className="fl">
                            <h1 className="text-2xl font-bold">13488</h1>
                            <span>园区总面积(平方米)</span>
                        </div>
                        <div className="fr text-6xl">
                            <PieChartOutlined className="text-yellow-300" />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row
                gutter={16}
                className="mt-4"
            >
                <Col span={12}>
                    <Card
                        title="能源消耗情况"
                        className="h-[470px]"
                    >
                        <ReactEcharts option={option}></ReactEcharts>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="能源消耗情况"
                        className="h-[470px]"
                    >
                        <ReactEcharts option={option}></ReactEcharts>
                    </Card>
                </Col>
            </Row>
            <Row
                gutter={16}
                className="mt-4"
            >
                <Col span={12}>
                    <Card
                        title="能源消耗情况"
                        className="h-[470px]"
                    >
                        <ReactEcharts option={option}></ReactEcharts>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="能源消耗情况"
                        className="h-[470px]"
                    >
                        <ReactEcharts option={option}></ReactEcharts>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
