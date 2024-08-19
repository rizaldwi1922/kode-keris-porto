import React from "react";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import "./App.css";
import { Layout } from "antd";

const App: React.FC = () => {

  return (
    <Layout className="porto-bg">
      <Header />
      <Introduce />
    </Layout>
  );
};

export default App;
