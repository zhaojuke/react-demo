import React, { Component } from 'react';

class AddTodo extends Component {

  handleClick () {
    const node = this.refs.input;
    const text = node.value.trim();
    text ?  this.props.onAddClick(text) : false;
  }
  handleKey (e) {
    const node = this.refs.input;
    const text = node.value.trim();
    text && e.keyCode === 13 ? this.props.onAddClick(text) : false;
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' onKeyDown={(e)=> (this.handleKey(e))}/>
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;