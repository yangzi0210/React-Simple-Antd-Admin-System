import React from "react";
import { useState, useEffect } from "react";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { getComments, getOrders } from "../../API/API";
import "./AppHeader.css";
import img from "../../Images/logo192.png";

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsLength, setCommentsLength] = useState(0);
  const [ordersLength, setOrdersLength] = useState(0);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
      setCommentsLength(res.comments.length)
    });
    getOrders().then((res) => {
      setOrders(res.products);
      setOrdersLength(res.products.length)
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image width={75} src={img}></Image>
      <Typography.Title>YOUNG-Z&nbsp;ADMIN&nbsp;SYSTEM </Typography.Title>
      <Space>
        <Badge count={commentsLength} dot>
          <MailOutlined
            style={{ fontSize: 30 }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={ordersLength}>
          <BellFilled
            style={{ fontSize: 30, paddingLeft: 10 }}
            onClick={() => {
              setNoticeOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="私信消息"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => <List.Item>{item.user.username.toUpperCase()}:&nbsp;{item.body}!</List.Item>}
        ></List>
      </Drawer>
      <Drawer
        title="系统通知"
        open={noticeOpen}
        onClose={() => {
          setNoticeOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text strong>{item.title}&nbsp;has been purchased!(${item.price})</Typography.Text>
            </List.Item>
          )}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
