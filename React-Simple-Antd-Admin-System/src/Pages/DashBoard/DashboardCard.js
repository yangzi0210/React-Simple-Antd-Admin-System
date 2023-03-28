import React from 'react'
import {Card,Space,Statistic} from 'antd'


const DashboardCard = ({ title, value, icon }) => {
    
    return (
      <Card>
        <Space direction="horizontal" size={105} >
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  };
  

export default DashboardCard