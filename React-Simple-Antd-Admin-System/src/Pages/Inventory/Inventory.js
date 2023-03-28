import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API/API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>商品库存列表</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "商品图片",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "商品名称",
            dataIndex: "title",
          },
          {
            title: "商品价格",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "商品评分",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "商品库存",
            dataIndex: "stock",
          },

          {
            title: "商品品牌",
            dataIndex: "brand",
          },
          {
            title: "商品类别",
            dataIndex: "category",
          },
          {
            title: "商品描述",
            dataIndex: "description",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Inventory;