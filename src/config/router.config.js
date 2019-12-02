import React from 'react';
import User from '@/views/User'
import Questioncount from '@/views/Question/Questioncount'
const Home = (props)=>{
  return (
    <div>首页</div>
  )
} 

let routerConfig = [
  {
    path: '/home',
    pathName: '系统首页',
    iconType: 'pie-chart',
    component: Home
  },
  {
    path: '/user',
    pathName: '个人中心',
    iconType: 'team',
    component: User
  },
  {
    pathName: '问题管理',
    iconType: 'inbox',
    childrens: [
      {
        path: '/question/count',
        pathName: '问题汇总',
        component: Questioncount
      },
      {
        path: '/question/step-form',
        pathName: '分布表单',
        component: () => (<div>分布表单</div>)
      },
      {
        path: '/form/advanced-form',
        pathName: '高级表单',
        component: () => (<div>高级表单</div>)
      },
    ]
  },
  {
    pathName: '邮件管理',
    iconType: 'mail',
    childrens: [
      {
        path: '/form/basic-form2',
        pathName: '基础邮件',
        component: () => (<div>基础邮件</div>)
      },
      {
        path: '/form/step-form2',
        pathName: '分布邮件',
        component: () => (<div>分布邮件</div>)
      },
      {
        path: '/form/advanced-form2',
        pathName: '高级邮件',
        component: () => (<div>高级邮件</div>)
      },
    ]
  },
  {
    pathName: '文章管理',
    iconType: 'setting',
    childrens: [
      {
        path: '/form/basic-setting',
        pathName: '基础设置',
        component: () => (<div>基础设置</div>)
      },
      {
        path: '/form/step-setting',
        pathName: '分布设置',
        component: () => (<div>分布设置</div>)
      },
      {
        path: '/form/advanced-setting',
        pathName: '高级设置',
        component: () => (<div>高级设置</div>)
      },
    ]
  }
]
export default routerConfig
