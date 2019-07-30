import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducer";
// import store from './store/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const isProduction = process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV)
const store = isProduction
  ? compose(applyMiddleware(reduxThunk))(createStore)(reducers)
  : compose(
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    )(createStore)(reducers);

const body = (
   <Provider store={store}>
    <App />
   </Provider>
)
console.log(body)

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

ReactDOM.render(body, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
