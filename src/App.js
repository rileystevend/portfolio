import React from 'react';
import logo from './logo.svg';
import TheCarousel from './components/carousel.jsx';
import SideMenu from './components/sidemenu.jsx';
import { Layout } from 'antd';
import 'antd/dist/antd.css'
const { Content, Footer, Sider, Header } = Layout;

function App() {
  return (
  <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width="25%">Sider
          <SideMenu></SideMenu>
        </Sider>
        <Layout>
          {/* <Header>Header</Header> */}
          <Content style={{/*{ margin: '0 16px' }*/ height: '90%'}}>
            <div style={{minHeight: 360}}>
              <TheCarousel />
            </div>
          </Content>
          <Footer style={{ marginLeft: '40%', height: '50px'}}>Made By Steven
          
          {/* <div style={{ color: textPrimary }}>Made by <a href="https://github.com/flexdinesh" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Dinesh</a> <span role="img" aria-label="heart">❤️</span></div> */}
          
          </Footer>
        </Layout>
      </Layout>
  </div>
  );
}

export default App;
