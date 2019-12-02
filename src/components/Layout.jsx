import React, { Component } from 'react';
import SlideMenu from './SlideMenu'
import routerConfig from '@/config/router.config.js'
import NavList from '@/Ant/NavList'
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="leftNav">
          <NavList/>
          {/* <SlideMenu routerConfig={routerConfig}/> */}
        </div>
        <div className="rightContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;