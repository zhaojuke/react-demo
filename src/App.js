import React, { Component } from 'react';
import Routes from '@/routes/index';
import './App.less'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Routes />
            </div>
        );
    }
}

export default App;