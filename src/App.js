import React from 'react';
import logo from './logo.svg';
import './components/carousel';
import { Layout } from 'antd';
import 'antd/dist/antd.css'
const { Content, Footer, Sider, Header } = Layout;

function App() {
  return (
  <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content

          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
  </div>
  );
}

export default App;
