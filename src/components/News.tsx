import { Typography, Row, Col, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { CryptoNews } from "../types";
import Loading from "./Loading";
const { Text, Title } = Typography;
type NewsQuery = { data?: CryptoNews[]; isFetching: boolean };
function News({ simplified }: { simplified?: boolean }) {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery<NewsQuery>(
    simplified ? 6 : 20
  );
  if (isFetching) return <Loading />;
  console.log(cryptoNews, isFetching);
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews!.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title text-clamp-3" level={4}>
                  {news.title}
                </Title>
                <img
                  src={news.media[0] || "../assets/images/th.jpeg"}
                  alt="articel image"
                />
              </div>
              <p className="text-clamp-5">{news.summary}</p>
              <div className="provider-container">
                <Text>{moment(news.published).startOf("s").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
