import React, {Component} from 'react'
import PropTypes from 'prop-types'

function Lis (props) {
  let removeItem =  function (e, index) {
    console.log(index)
    props.removeItem(index)
  }
  return (
    <li ref={props.refLis} >
      <h2>{props.title}</h2>
      <span>{props.time}</span>
      <button onClick={(e) => {
        removeItem(e, props.index)
      }}>删除</button>
    </li>
  )
}

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'xxx',
      lisArr: [],
      listData: [
        {
          title: '标题1',
          time: '111111'
        },
        {
          title: '标题2',
          time: '111111'
        },
        {
          title: '标题3',
          time: '111111'
        },
        {
          title: '标题4',
          time: '111111'
        },
        {
          title: '标题5',
          time: '111111'
        }
      ]
    }
    this.clickfn = this.clickfn.bind(this)
  }

  static defaultProps = {
    name: '流域'
  }
  static propTypes = {
    name: PropTypes.number
  }

  componentWillMount () {
    console.log('%c 渲染前', 'color:red;font-size:20px')
  }
  componentDidMount () {
    console.log( this.state.lisArr)
    console.log('%c 渲染后', 'color:red;font-size:20px')
  }

  clickfn () {
    console.log(this)
    this.setState({
      name: '着科举'
    })
  }

  removeItem (index) {
    this.state.listData.splice(index, 1)
    this.setState({
      listData: this.state.listData
    })
  }

  render () {
    console.log('%c 渲染', 'color:red;font-size:20px')
    let {
      listData
    } = this.state
    return (
      <ul ref='ul'>
        <a>{this.state.name}</a>
        <input type='text' ref={(input) => {this.myInptu = input}} />
        <li>{this.props.name}<button onClick={this.clickfn}>点我</button></li>
        {
          listData.map((item, index) => (
            <Lis refLis={dom => this.state.lisArr.push(dom)} removeItem={(index) => {
              this.removeItem(index)
            }} title={item.title} index={index} time={item.time} key={index}></Lis>
          ))
        }
      </ul>
    )
  }

  //存在期
  componentWillReceiveProps () {
    console.log('%c props在父组件改变了', 'color:green;font-size:20px')
  }

  shouldComponentUpdate () {
    console.log('%c 要不要更新', 'color:green;font-size:20px')
    return true
  }

  componentWillUpdate () {
    console.log('%c 更新前', 'color:green;font-size:20px')
  }
  componentDidUpdate () {
    console.log('%c 更新后', 'color:green;font-size:20px')
  }

  //销毁期
  componentWillUnmount () {
    console.log('%c 卸载', 'color:#ccc;font-size:20px')
  }
}