import React from "react";
import { Layout, Typography } from "antd";
import { BugOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const { Text } = Typography;

  return (
    <Layout.Header className="bg-porto" style={{ display: "flex", alignItems: "center" }}>
      <BugOutlined
        style={{ color: "#22d3ee", fontSize: 30, marginRight: 10 }}
      />
      <Text strong style={{ fontSize: 30, color: "#F5F5F5" }}>
        Kode
      </Text>{" "}
      <Text strong style={{ fontSize: 30}} className="text-transparent bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text">
        Keris
      </Text>
    </Layout.Header>
  );
};

export default Header;
