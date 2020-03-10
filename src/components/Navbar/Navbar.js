import React from "react";
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
          <HomeFilled />
          Home
        </Menu.Item>
        <Menu.Item key="2">
          <CarFilled />
          Fahrzeugangebot
        </Menu.Item>
        <Menu.Item key="3">
          <CustomerServiceFilled />
          Unsere Services
        </Menu.Item>
        <Menu.Item key="4">
          <CrownOutlined />
          Über Uns
        </Menu.Item>
      </Menu>
    </Layout>
  );
};

export default Navbar;
