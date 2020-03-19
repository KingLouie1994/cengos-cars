import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./Navbar.module.css";
import {
  HomeFilled,
  CarFilled,
  CustomerServiceFilled,
  CrownOutlined
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <Layout className="layout">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.menu}
      >
        <Menu.Item key="1">
          <Link to="/">
            <HomeFilled /> Home
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/caroffers">
            <CarFilled /> Fahrzeugangebot
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="services">
            <CustomerServiceFilled /> Unsere Services
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about">
            <CrownOutlined /> Über Uns
          </Link>
        </Menu.Item>
      </Menu>
    </Layout>
  );
};

export default Navbar;
