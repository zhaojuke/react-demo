import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    activateLasers(){
      alert(1)
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          {this.state.date.toLocaleTimeString()}
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.activateLasers}>
            Activate Lasers
          </button>
        </div>
      );
    }

  }
  export default Clock;
