const defaultState = {
    tableList:[]
  }
//reducer 可以接受state但是不可以修改state 只有store才能改变
//纯函数值得是，制定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action)=> {
console.log(state,action);
return state;
}