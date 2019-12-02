import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import routeConfig from '@/config/router.config.js'
import {withRouter} from 'react-router'
const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      defaultSelectedKeys: [],
      defaultOpenKeys: []
    }
  }
  setDefaultSelect () {
    const {
      pathname
    } = this.props.location;
    routeConfig.map((item, index) => {
      if (item.path === pathname) {
        this.setState({
          defaultSelectedKeys: [index.toString()]
        })
      } else if (item.childrens) {
        item.childrens.map((item2, index2) => {
          if (item2.path === pathname) {
            this.setState({
              defaultSelectedKeys: [index+'-'+index2],
              defaultOpenKeys: [index.toString()]
            })
          }
        })
      }
    })
  }

  componentWillMount () {
    this.setDefaultSelect()
  }
  menuItemClick({item}){
    const {
      push
    } = this.props.history
    push(item.props.routePath)
  }
  render() {
    let {
      defaultSelectedKeys,
      defaultOpenKeys
    } = this.state
    return (
        <Menu 
          theme="dark" mode="inline" 
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          onClick={(obj)=>{this.menuItemClick(obj)}}
        >
          {
            routeConfig.map((val,index)=>{
              if(val.childrens){
                const title = (
                  <span><Icon type={val.iconType} /><span>{val.pathName}</span></span>
                )
                return (
                  <SubMenu  key={index} title={title}>
                    {
                      val.childrens.map((val2,index2)=>{
                        return (
                          <Menu.Item key={index+'-'+index2} routePath={val2.path}> {val2.pathName} </Menu.Item>
                        )
                      })
                    }
                  </SubMenu> 
                )
              }else{
                return (
                  <Menu.Item key={index} routePath={val.path}> 
                    <Icon type={val.iconType}></Icon>
                    <span>{val.pathName} </span>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
    )
  }
};
export default withRouter(LeftMenu)
