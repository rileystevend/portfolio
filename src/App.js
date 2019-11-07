import React from 'react';
import logo from './logo.svg';
import TheCarousel from './components/carousel.jsx';
import Cards from './components/cards.jsx';
import SideMenu from './components/sidemenu.jsx';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css'
const { Content, Footer, Sider, Header } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '1',
    };
  }

  onSelect(info) {
    console.log(info)

      this.setState({ key: info });
    this.view()
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

  componentDidMount() {
    this.view()
  }


  render() {
    return (
    <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed = {this.state.collapsed} width="25%">Sider
            <SideMenu>
            </SideMenu>
            <Button onClick={()=>{this.onSelect(2)}}>
            </Button>
          </Sider>
          <Layout>
            {/* <Header>Header</Header> */}
            <Content style={{/*{ margin: '0 16px' }*/ height: '90%'}}>
              <div style={{minHeight: 360}}>
                {/* <TheCarousel /> */}
                {this.view()}
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
}

export default App;
