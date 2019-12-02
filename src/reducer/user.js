import {GET_USER_INFO, LOGIN_OUT, LOGIN_DO} from '@/action/user'

const initialState = {
  login_type: false,
  logn_info: {
    username: 'xx',
    sex: '男',
    age: 200
  }
}

function user (state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO :
      return Object.assign({}, state, {
        login_type: action.info ? true : false,
        login_info: action.info
      })
    case LOGIN_OUT :
      return  Object.assign({}, state, {
        login_info: {},
        login_type: false
      })
    case LOGIN_DO :
      return Object.assign({}, state, {
        login_info: action.info,
        login_type: false
      })
    default :
      return state
  }
}

export default user