import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * 组件通讯
 * 1,父子通讯 : 子组件获取父组件的数据
 *   props数据传递
 * 
 * 2,跨级组件通信: 父组件使用孙子或者孙子以后的后代的数据
 *   props逐级传递  ->  层级嵌套太多不利于维护
 *   定义的全局变量   ->  没有模块概念,容易污染全局环境,不利于维护,没有数据和view层的渲染关系
 *   context
 *    
 * 3,子父通讯: 父组件使用子组件的数据
 *   通过props传递回掉函数
 *   通过ref获取到子组件的实例   ->   如果子组件是函数式组件则获取不到子组件的实例
 * 
 * 4,同级通讯: 两个属于同一级别的组件进行数据通讯
 *   定义的全局变量   ->  没有模块概念,容易污染全局环境,不利于维护,没有数据和view层的渲染关系
 *   通过中介者模式(通过父组件作为中介者)   父亲 props 回掉函数 <-a子组件  父亲 props  ->  数据  ->  b子组件  过于复杂
 *   通过自定义事件  events 的 EventEmitter 对象  ( addListener removeListener emit)
 */

class ChildSonSon extends Component {
  static contextTypes = {
    fristName: PropTypes.string,
    lastName:  PropTypes.string
  }
  
  render () {
    console.log(this)
    return (
      <ul>重孙子A  姓: {this.context.fristName}</ul>
    )
  }
}

 
class ChildSon extends Component {
  render () {
    console.log(this.props)
    return (
      <ul>孙子A  姓: {this.context.fristName}<ChildSonSon /></ul>
    )
  }
}


class ChildA extends Component {
  static contextTypes = {
    fristName: PropTypes.string
  }

  render () {
    console.log(this.props)
    console.log(this)
    return (
      <ul>哥哥 (有病)  姓: {this.context.fristName}
        <ChildSon />
        <button onClick={
          () => {
            this.props.call('眼睛')
          }
        }>来个眼睛</button>
      </ul>
    )
  }
}

class ChildB extends Component {
  render () {
    console.log(this.props)
    return (
      <ul>弟弟 (健康) {this.props.xuyao}</ul>
    )
  }
}

export default class Parend extends Component {

  constructor (props) {
    super(props)
    this.state = {
      fristName: '刘',
      callProps : {
        xuyao: '晟'
      }
    }
    this.call = this.call.bind(this)
  }

  setFristName (str) {
    this.setState({
      fristName: str
    })
  }

  call (str) {
    this.setState({
      fristName: str
    })
  }
  static childContextTypes = {
    fristName: PropTypes.string
  }

  getChildContext() {
    return {
      fristName: this.state.fristName
    }
  }

  render () {
    var props = {
      name: '子级A',
      age: 1000,
      fristName: '刘'
    }
    return (
      <ul>父级
        <ChildA call={this.call}/>
        {/* <ChildB {...this.state.callProps} /> */}
      </ul>
    )
  }
}