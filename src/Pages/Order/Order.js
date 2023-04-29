import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API/API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>下单情况</Typography.Title>
      <Table
        loading={loading}
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
            title: "商品价格",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "商品进价",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "下单数量",
            dataIndex: "quantity",
          },
          {
            title: "商品库存数量",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 6,
        }}
      ></Table>
    </Space>
  );
}
export default Orders;