import React, { Component } from 'react';
import {connect} from 'react-redux'

class User extends Component {
  render() {
    console.log(this.props.user)
    return (
      <div>
        user
      </div>
    );
  }
}

export default connect((state) => {
  return {
    user: state.user
  }
})(User);
