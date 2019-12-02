import React from 'react';

import {
  Route
} from 'react-router-dom'

import routerConfig from '@/config/router.config.js'

export default () => {
  return (
    <div>
      {
        routerConfig.map((item, index) => {
          if (item.childrens) {
            return item.childrens.map((childrenItem, childrenIndex) => {
              return (
                <Route key={index+'-'+childrenIndex}  path={childrenItem.path} component={childrenItem.component}></Route>
              )
            })
          } else {
            return (
              <Route  key={index} path={item.path} component={item.component}></Route>
            )
          }
          
        })
      }
    </div>
  )
}