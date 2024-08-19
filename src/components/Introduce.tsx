import React from "react";
import { Layout, Typography } from "antd";
import PhotoAvatar from "../assets/img/avatar.png";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";

const Introduce: React.FC = () => {
  const { Text } = Typography;
  const { Content } = Layout;
  const iconColor = '#22d3ee'
  return (
    <Content className="max-w-screen-lg px-3 py-6 mx-auto">
      <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div>
            <Text className="text-3xl font-bold light-txt">
              Hi there, I'm{" "}
              <span className="text-transparent bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text">
                Rizal Dwi
              </span>{" "}
              👋
            </Text>
            <p
              style={{ textAlign: "justify" }}
              className="mt-6 text-xl leading-9 light-txt"
            >
              <p>
                I am a professional programmer with over 3 years of experience
                in developing websites, mobile apps, and ERP systems.
              </p>

              <p>
                Throughout my career, I have created applications such as online
                learning platforms, online booking systems, and information
                systems.
              </p>

              <p>
                {" "}
                I am committed to continuously expanding and updating my skills
                to stay relevant with current industry technology needs.
              </p>
            </p>
            <div className="flex gap-1 mt-3">
              <a href="https://github.com/rizaldwi1922?tab=repositories" target="_blank" rel="noreferrer">
                <GithubFilled
                  style={{ color: iconColor, fontSize: 40, marginRight: 10 }}
                />
              </a>
              <a href="https://www.linkedin.com/in/rizal-dwi-rahmawiyanto-a2b100165/" target="_blank" rel="noreferrer">
                <LinkedinFilled
                  style={{ color: iconColor, fontSize: 40, marginRight: 10 }}
                />
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <img className="h-80" src={PhotoAvatar} alt="" />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Introduce;