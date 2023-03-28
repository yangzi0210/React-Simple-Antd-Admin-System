import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API/API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>来访顾客情况</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "顾客头像",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "顾客名字",
            dataIndex: "firstName",
          },
          {
            title: "顾客姓氏",
            dataIndex: "lastName",
          },
          {
            title: "顾客邮箱",
            dataIndex: "email",
          },
          {
            title: "顾客手机号",
            dataIndex: "phone",
          },

          {
            title: "顾客地址",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 8,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;