import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Coin } from "../types";
import Loading from "./Loading";
function Cryptocurrencies({ simplified }: { simplified?: boolean }) {
  const count = simplified ? 20 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [coins, setCoins] = React.useState<Coin[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin: Coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCoins(filteredData);
  }, [cryptosList, searchTerm]);
  if (isFetching) return <Loading />;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((currency: Coin) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/CryptoTracker/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(+currency.price)}</p>
                <p>Market Cap: {millify(+currency.marketCap)}</p>
                <p>Daily Change: {millify(+currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
