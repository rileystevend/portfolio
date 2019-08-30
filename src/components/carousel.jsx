import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import * as actions from '../actions/index.js';
import calendar from './calendar.jsx';
import Requests from './requests.jsx';
import SearchVenues from './searchVenues.jsx';
import EPKEdit from './epkEdit.jsx';
import EPKView from './epkView.jsx';
import logo from '../../../beatbooklogo.png';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '1',
    };
  }

  onSelect(info) {
    if (info.key === '6') {
      this.props.actions.logout();
    } else {
      this.setState({ key: info.key });
    }
  }

  view() {
    const { key } = this.state;
    const artist = this.props.store.artistId;
    const artist2 = parseInt(artist.toString()); /* eslint-disable-line */
    const { bookings } = this.props.store;
    const filteredBookings = bookings.length > 0 ? bookings.filter(booking => booking.denied !== 1) : [];
    if (key === '1') {
      return calendar(filteredBookings, true, artist2, null, this.props.actions.addBooking);
    }
    if (key === '2') {
      return (<SearchVenues />);
    }
    if (key === '3') {
      return (<Requests />);
    }
    if (key === '4') {
      return (<EPKView artist={artist} />);
    }
    if (key === '5') {
      return (<EPKEdit artistID={artist} />);
    }
  }

  render() {
    return (
    <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}



const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actions, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
