/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

Chart.register(LinearScale, CategoryScale, LineElement, PointElement);

function Livechart({
  coinHistory,
  currentPrice,
  coinName,
}: {
  coinHistory: any;
  currentPrice: string;
  coinName: string;
}) {
  const coinPrice: string[] = [];
  const coinTimestamp: string[] = [];

  coinHistory?.data?.history?.forEach((history: any) => {
    coinPrice.push(history.price);
    const date = new Date(history.timestamp * 1000);
    coinTimestamp.push(date.toLocaleDateString("en-US"));
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
}

export default Livechart;
