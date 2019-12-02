export const GET_USER_INFO = 'GET_USER_INFO'
export const LOGIN_OUT = 'LOGIN_OUT'
export const LOGIN_DO = 'LOGIN_DO'

export function GetUserInfo() {
  return { type: GET_USER_INFO }
}

export function LoginDo( lognInfo ) {
  return { type: LOGIN_DO, lognInfo }
}