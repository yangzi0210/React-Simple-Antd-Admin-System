import React from "react";
import "./AppFooter.css";
import { Typography } from "antd";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://www.youtube.com" target={"_blank"}>
        关于我们
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        联系我们
      </Typography.Link>
      <Typography.Link href="https://www.github.com" target={"_blank"}>
        友情链接
      </Typography.Link>
      <Typography.Link href="https://www.instagram.com/" target={"_blank"}>
        意见反馈
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
