import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";
import { Layout, Typography } from "antd";
import PhotoAvatar from './assets/img/avatar.png'

const App: React.FC = () => {
  const { Content } = Layout;
  const { Text } = Typography;

  return (
    <Layout className="porto-bg">
      <Header />
      <Content className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
            <div>
              <Text className="text-3xl font-bold light-txt">
                Hi there, I'm{" "}
                <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  Rizal Dwi
                </span>{" "}
                👋
              </Text>
              <p className="mt-6 text-xl leading-9 light-txt">
                I am a professional programmer with over 3 years of experience
                in developing websites, mobile apps, and ERP systems. Throughout
                my career, I have created applications such as online learning
                platforms, online booking systems, and information systems. I am
                committed to continuously expanding and updating my skills to
                stay relevant with current industry technology needs.
              </p>
            </div>
            <div className="shrink-0">
              <img
                className="h-80"
                src={PhotoAvatar}
                alt="Avatar image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
