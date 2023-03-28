import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { Column } from "@ant-design/plots";

const { Title } = Typography;

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "product_type",
    yField: "order_amt",
    isGroup: true,
    isStack: true,
    seriesField: "product_sub_type",
    groupField: "sex",
  };

  return (
    <>
      <Title level={3}>
        最近销售订单种类分布&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Title>
      <Column {...config} />
    </>
  );
};

export default Chart;
