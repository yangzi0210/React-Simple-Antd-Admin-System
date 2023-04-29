import React from 'react'
import {Menu} from 'antd'
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "数据总览",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "商品库存",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "订单详情",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "顾客详情",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "退出登陆",
            key: "/logout",
            icon:<LogoutOutlined />,
          }
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu