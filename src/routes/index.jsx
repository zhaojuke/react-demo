/**
 * HashRouter/BrowserRouter 定义路由方式Hash/或者Location
  *   Switch路由切换组件，多个Route时用Switch包裹，否则会报警告
  *   Route路由
  *   Redirect路由重定向
  *   exact路由绝对匹配
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '@/pages/home/index';
import About from '@/pages/about/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Routes;

// import React from "react"
// import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
// import Home from '@/pages/home/index'
// export default () => (
//   <HashRouter>
//     <Switch>
//       <Route path="/home" component={Home}></Route>
//       <Redirect exact from="/" to="/home" />
//     </Switch>
//   </HashRouter>
// )

