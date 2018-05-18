import * as home from './action-type';

let defaultState = {
  num: '',
  name: '',
}

export const formData = (state = defaultState, action={}) => {
  console.log(state, action)
  switch (action.type) {
    case home.SAVEDATA:
      return {...state, ...action}
  
    default:
    return state;
  }
}
