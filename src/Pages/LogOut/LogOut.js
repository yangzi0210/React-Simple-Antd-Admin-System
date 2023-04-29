import React from 'react'
import './LogOut.css'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate ,Space,Typography} from 'antd';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const Judge = () => (
  <>
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  </>
);
const LogOut = () => {

  return (
    
      <Space size={40} direction='vertical'>
        <Typography.Title level={1}>您已经成功退出账号！</Typography.Title>
        <Typography.Title level={2}>请给本次体验评价！</Typography.Title>
        <Judge/>
      </Space>
    
  );

}
export default LogOut;