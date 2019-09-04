import React from 'react';
import logo from './logo.svg';
import TheCarousel from './components/carousel.jsx';
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
          <Content style={{ margin: '0 16px' }}>
            <div style={{minHeight: 360, padding: 24}}>
              <TheCarousel />
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
  </div>
  );
}

export default App;
