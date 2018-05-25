import * as home from './action-type';

// let defaultState = {
//   num: '',
//   name: '',
// }
let id = 0;
let dataList = [
  {
    name: '123ss',
    status: 0
  }
]


// export const formData = (state = defaultState, action={}) => {
//   console.log(state, action)
//   switch (action.type) {
//     case home.SAVEDATA:
//       return {...state, ...action}
  
//     default:
//     return state;
//   }
// }
export const listData = (state = dataList, action={}) => {
  console.log(state, action)
  switch (action.type) {
    case home.ADDLIST:
      console.log(home.ADDLIST)
      return [...state, {name: action.val, status: id += 1}]
    case home.DELETELIST:
      const tempState = state.filter((v) => v.status !== action.id);
      console.log(tempState);
      return [...tempState];
    default:
      return state;
  }
}
