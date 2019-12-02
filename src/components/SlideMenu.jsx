import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
  Link
} from 'react-router-dom'


function siblings (ele) {
  var parentEle = ele.parentNode
  var childs = parentEle.children
  var siblingsArr = []

  for (var i=0; i<childs.length; i++) {
    if (childs[i] !== ele) {
      siblingsArr.push(childs[i])
    }
  }
  return siblingsArr;
}

class SubMenu extends Component {
  render () {
    let {
      route,
      isShow
    } = this.props
    return (
      <ul className="subMenu" style={isShow ? {display: 'block'} : {display: 'none'} } >
        {
          route.childrens.map((item, index) => {
            return (
              <MenuItem 
                {...item} 
                defaultSlideIndex={route.defaultSlideIndex} 
                key={route.index+"-"+index}
                index={route.index+"-"+index}
              />
            )
            //return MenuItem(item)
          })
        }
      </ul>
    )
  }
}

class MenuItem extends Component {

  render () {
    let route = this.props

    if (route.childrens) {

      return (
        <li className="menuSlide">
          <span onClick={() => {
            let subMenuDom = ReactDom.findDOMNode( this.refs.subMenu );
            let display = subMenuDom.style.display
            if ( display === 'none' ) {
              subMenuDom.style.display = 'block'
            } else {
              subMenuDom.style.display = 'none'
            }
            let siblingsDom = siblings(subMenuDom.parentNode)

            siblingsDom.forEach((item, index) => {
              console.log(item)
              if (item.querySelector('.subMenu')) {
                item.querySelector('.subMenu').style.display = 'none'
              }
            })
          }}>{route.pathName}</span>
          <SubMenu 
            route={route} 
            defaultSlideIndex={route.defaultSlideIndex} 
            isShow={route.defaultSlideIndex === route.index} 
            index={route.index}
            ref="subMenu"
          />
        </li>
      )
    } else {
      return <li  className="menuItem"><Link to={route.path}>{route.pathName}</Link></li>
    }
  }

  
}

class SlideMenu extends Component {

  constructor (props) {
    super(props)
    this.state = {
      defaultSlideIndex: 2
    }
  }

  static defaultProps = {
    routerConfig: []
  }

  render () {
    let {
      routerConfig
    } = this.props
    return (
      <div className="slide-menu">
        {
          routerConfig.map((item, index) => {
            return (
              <MenuItem 
                {...item} 
                index={index} 
                key={index} 
                defaultSlideIndex={this.state.defaultSlideIndex}
              />
            )
          })
        }
      </div>
    )
  }
}

export default SlideMenu;
