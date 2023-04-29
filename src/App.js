import React from "react";
import AppFooter from "./Components/AppFooter/AppFooter";
import AppHeader from "./Components/AppHeader/AppHeader";
import PageContent from "./Components/PageContent/PageContent";
import SideMenu from "./Components/SideMenu/SideMenu";
import "./App.css";
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  lineHeight: '80px',
  backgroundColor: 'white',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 650,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'rgba(0,0,0,0.01)',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'white',
  maxHeight:30,
};

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >    
    <Layout>
      <Header style={headerStyle}><AppHeader /></Header>
      <Layout>
        <Sider style={siderStyle}> <SideMenu /></Sider>
        <Content style={contentStyle}><PageContent /></Content>
      </Layout>
      <Footer style={footerStyle}><AppFooter /></Footer>
    </Layout>
    </Space>
)
export default App;
