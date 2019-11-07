import React from 'react';
import logo from './logo.svg';
import TheCarousel from './components/carousel.jsx';
import Cards from './components/cards.jsx';
import SideMenu from './components/sidemenu.jsx';
import { Layout, Button, Menu, Icon } from 'antd';
import 'antd/dist/antd.css'
const { Content, Footer, Sider, Header } = Layout;
const {SubMenu} = Menu;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '1',
      collapsed: false,
    };
  }

  onCollapse(collapsed) {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  onSelect(info) {
    console.log(info)

      this.setState({ key: info.key });
 
  }

  view() {
    const { key } = this.state;
    if (key === '1') {
      return (<TheCarousel />);
    }
    if (key === '2') {
      return (<Cards />);
    }
    
    // if (key === '3') {
    //   return (<Requests />);
    // }
    // if (key === '4') {
    //   return (<EPKView artist={artist} />);
    // }
    // if (key === '5') {
    //   return (<EPKEdit artistID={artist} />);
    // }
  }


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            onSelect={info => this.onSelect(info)}
          >
            <Menu.Item key="1">
              <Icon type="calendar" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="search" />
              <span>My Projects</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="folder" />
              <span>My Resume</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span>
                <Icon type="team" />
                <span>SubMenu</span>
                </span> /* eslint-disable-line */}>
              <Menu.Item key="4">View</Menu.Item>
              <Menu.Item key="5">Edit</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
              }}/* eslint-disable-line */>
              {this.view()}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <img src={logo} style={{ height: 20 }} alt="" />
            <div style={{
              fontSize: 14,
              fontFamily: "'Baumans', cursive",
              color: 'black',
              display: 'inline-block',
              }}
            >Steven Riley
            </div>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
