import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        >
        <p
          style={{
            display:'inline-block',
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}
        >
          {this.props.text}
        </p>
        <span style={{paddingLeft:'50px'}}>删除</span>
      </li>
    );
  }
}