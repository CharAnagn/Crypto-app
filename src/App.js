import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
        <Navbar />
      <div className="main">
        
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
            <Routes>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            </Routes>
            <Routes>
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
            <Routes>
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto Blog <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/home">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
