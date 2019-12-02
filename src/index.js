import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import './index.css';
import AntDemo from './Ant/AntDemo'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from '@/store'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css';
let LoginType = true
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      {
        LoginType ? <AntDemo/> : ''
      }
      <Route exact path="/" render={(props) => {
          if (LoginType) {
            return <Redirect to="/home"/>
          } else {
            return (<div>登录<button onClick={() => {
              LoginType = true
              props.history.push('/home')
            }}>登录</button></div>)
          }
        }
      }></Route>
      
    </div>
  </Router>
  </Provider>
, document.getElementById('root'), () => {
});
registerServiceWorker();
