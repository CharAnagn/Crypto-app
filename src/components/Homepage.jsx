import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
console.log(data);
  if (isFetching) return <Loader />;
  

  return (
    <>
    <div className="crypto-stats">
    <Title lebel={2} className="heading">
        Global Crypto Stats
      </Title>
      
      <Row >
        <Col span={12} className="counter">
          <h2>Total Cryptocurrenciess:</h2>
          <CountUp start={0} end={globalStats.total} delay={0} duration={2} separator=","></CountUp>
        </Col>
        <Col span={12} className="counter">
        <h2 >Total Exchanges:</h2>
          <CountUp start={0} end={globalStats.totalExchanges} delay={0} duration={2}  separator=","></CountUp>
          
        </Col>
        <Col span={12} className="counter">
          <h2 >Total Market Cap:</h2>
          <CountUp start={0} end={globalStats.totalMarketCap} delay={0} duration={2}  separator=","></CountUp><span> $</span>
          
        </Col>
        <Col span={12} className="counter">
        <h2 >Total 24h Volume:</h2>
          <CountUp start={0} end={globalStats.total24hVolume} delay={0} duration={2}  separator=","></CountUp><span> $</span>
        </Col>
        <Col span={12} className="counter">
        <h2 >Total Markets:</h2>
          <CountUp start={0} end={globalStats.totalMarkets} delay={0} duration={2}  separator=","></CountUp>
        </Col>
      </Row>
    </div>
      
      <div className="home-heading-container">
        <h2>Top 10 Cryptocurrencies</h2>
      </div>
      <Cryptocurrencies simplified />
      <div className="show-more">
          <Link to="/cryptocurrencies">Show more Cryptocurrencies</Link>
        </div>
      <div className="home-heading-container">
        <h2>Latest Crypto News</h2>
        
      </div>
      <News />
    </>
  );
};

export default Homepage;
