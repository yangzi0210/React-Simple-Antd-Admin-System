import React from "react";
import { useEffect, useState } from "react";
import { getOrders } from "../../API/API";
import { Table, Typography } from "antd";
const { Title } = Typography;
const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Title level={3}>最近订单</Title>
      <Table
        columns={[
          {
            title: "商品ID",
            dataIndex: "id",
          },
          {
            title: "商品名称",
            dataIndex: "title",
          },
          {
            title: "订单数量",
            dataIndex: "quantity",
          },
          {
            title: "商品定价",
            dataIndex: "price",
          },
          {
            title: "商品成本",
            dataIndex: "discountedPrice",
          },
          {
            title: "商品库存",
            dataIndex: "total",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
       
      ></Table>
    </>
  );
};

export default RecentOrders;
