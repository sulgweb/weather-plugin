/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-13 15:47:50
 * @LastEditTime: 2021-01-13 15:55:37
 * @Copyright: 1.0.0
 */

/**
 * @description: 封装chomre.store.local.set()方法
 * @Date: 2021-01-13 15:48:43
 * @author: 小羽
 * @param {*} params
 * @return {*}
 */
function setSync(params){
  return new Promise((resolve,reject)=>{
      chrome.storage.local.set(params,res=>{
          resolve("success");
      })
  })
}

/**
 * @description: 封装chrome.store.local.get()方法
 * @Date: 2021-01-13 15:48:57
 * @author: 小羽
 * @param {*} params
 * @return {*}
 */
function getSync(params){
  return new Promise((resolve,reject)=>{
      console.log(chrome)
      chrome.storage.local.get(params,res=>{
          resolve(res);
      })
  })
}

export {setSync, getSync}