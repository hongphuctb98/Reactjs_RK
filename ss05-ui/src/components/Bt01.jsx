import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Typography } from "antd";
import "./Bt01.css";
import Bt01Card from "./Bt01Card";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const itemList = [
  {
    key: "1",
    label: "Menu 1",
  },
  {
    key: "2",
    label: "Menu ",
  },
  {
    key: "3",
    label: "Menu 2",
  },
  {
    key: "4",
    label: "Menu 2",
  },
];

function Bt01() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          inlineCollapsed={false}
          style={{
            width: "100%",
          }}
          items={itemList}
        />
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Bt01Card />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Bt01;
