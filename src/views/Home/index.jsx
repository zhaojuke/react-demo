import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'
import Footer from './component/Footer'

class componentName extends Component {
  render() {
    return (
      <div>
          <AddTodo onAddClick={text =>
              this.props.addTodo(text)
            } />
          <TodoList
            todos={this.props.todoState}
            onTodoClick={index =>
              this.props.removeTodo(index)
            } />
          <Footer
            filter={this.props.filter}
            onFilterChange={filter =>
              this.props.setFilter(filter)
            } />
      </div>
    );
  }
}

function filterTodo (todoList, filter) {
  return todoList.filter((item, index) => {
    console.log(filter)
    if (filter === "SHOW_ALL") {
      return true
    } else if (filter === "SHOW_COMPLETED") {
      return item.completed
    } else {
      return !item.completed
    }
  })
}

export default connect(
  (state) => {
    return {
      todoState: filterTodo(state.todoRedux.todoList, state.todoRedux.filter),
      filter: state.todoRedux.filter
    }
  },
  (dispatch) => {
    return {
      addTodo (text) {
        dispatch({type: 'ADD_TODO', text: text})
      },
      removeTodo (index) {
        dispatch({type: 'REMOVE_TODO', index})
      },
      setFilter (filter) {
        dispatch({type: 'SET_FILTER', filter})
      }
    }
  }
)(componentName);