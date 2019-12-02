import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import List from '@/components/List'
import Call from '@/components/call'


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      flg: true,
      val: '',
      selectVal: 3
    }
  }

  dis () {
    this.setState({
      flg: !this.state.flg
    })
  }

  selected (e) {
    this.setState({
      selectVal: e.target.value
    })
  }

  formItem (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <Call />
  
      </div>
    );
  }

  componentDidMount () {
    console.log(this.input)
  }
}

export default App;
