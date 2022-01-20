import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);


  return (
         
      <Menu mode="horizontal" style={{backgroundColor: 'rgba(2, 6, 25,0.9)'}} >
        <Menu.Item icon={<HomeOutlined />} style={{color:'rgba(28,222,244,255)'}}>
          <Link to="/" style={{color:'rgba(28,222,244,255)', ':hover':'red'}}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} style={{color:'rgba(28,222,244,255)',}}>
          <Link to="/cryptocurrencies" style={{color:'rgba(28,222,244,255)'}}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} style={{color:'rgba(28,222,244,255)'}}>
          <Link to="/news" style={{color:'rgba(28,222,244,255)'}}>News</Link>
        </Menu.Item>
      </Menu>
    
  );
};

export default Navbar;
