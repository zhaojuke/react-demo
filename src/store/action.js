// actions: 修改state必须通过action
 
import { USER_LOGIN, ADD_ORDER_NUM, USER_LOGOUT } from './actionTypes'
export function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload
  }
}
export function logout() {
  return {
    type: USER_LOGOUT
  }
}
export function addOrderNum() {
  return {
    type: ADD_ORDER_NUM
  }
}
