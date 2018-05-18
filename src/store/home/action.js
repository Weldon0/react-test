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