import * as home from './action-type';

/**
 * 
 * 保存数据
 */
export const saveFormData = (num, datatype) => {
  console.log(num, datatype)
  return {
    type: home.SAVEDATA,
    num,
    datatype,
  }
}

/**
 * 添加列表数据
 */
export const addList = (val) => {
  // console.log(num, datatype)
  return {
    type: home.ADDLIST,
    val
  }
}

export const deleteList = (id) => {
  return {
    type: home.DELETELIST,
    id
  }
}

