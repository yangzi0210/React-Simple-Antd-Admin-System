import React, { useEffect, useState } from "react";
import { Space} from "antd";
import {
  getCustomers,
  getInventory,
  getOrders,
  getRevenue,
} from "../../API/API";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DashboardCard from "./DashboardCard";
import RecentOrders from "./RecentOrders";
import Chart from "./Chart";
const DashBoard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders()
      .then((res) => res.products)
      .then((res) => res.length)
      .then((res) => {
        setOrders(res);
      });
    getInventory()
      .then((res) => res.products)
      .then((res) => res.reduce((sum, current) => sum + current.stock, 0))
      .then((res) => {
        setInventory(res);
      });
    getCustomers()
      .then((res) => res.users)
      .then((res) => res[res.length - 1].id)
      .then((res) => {
        setCustomers(res);
      });
    getRevenue()
      .then((res) => res.carts[0].products)
      .then((res) =>
        res.reduce((sum, current) => sum + current.discountPercentage * 100, 0)
      )
      .then((res) => {
        setRevenue(res);
      });
  }, []);
  return (
    <Space size={30} direction="vertical">
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "",
                backgroundColor: "",
                borderRadius: 20,
                fontSize: 36,
                padding: 8,
              }}
            />
          }
          title={"待处理订单"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "",
                backgroundColor: "",
                borderRadius: 20,
                fontSize: 36,
                padding: 8,
              }}
            />
          }
          title={"商品总库存"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "",
                backgroundColor: "",
                borderRadius: 20,
                fontSize: 36,
                padding: 8,
              }}
            />
          }
          title={"当前访客量"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "",
                backgroundColor: "",
                borderRadius: 20,
                fontSize: 36,
                padding: 8,
              }}
            />
          }
          title={"今日营收额"}
          value={revenue}
        />
      </Space>
      <Space size={100}>
        <RecentOrders />
        <Chart />
      </Space>
      
    </Space>
  );
};

export default DashBoard;
