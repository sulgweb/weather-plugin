/*
 * @description: 封装axios拦截器
 * @author: 小羽
 * @Date: 2021-01-13 15:36:45
 * @LastEditTime: 2021-01-13 15:54:29
 * @Copyright: 1.0.0
 */
import axios from "axios"
import { setSync, getSync } from "./chrome"

let myAxios = axios.create({})
myAxios.defaults.headers.post['Content-Type'] = 'application/json';

// http request 拦截器
myAxios.interceptors.request.use(async config => {
  /* const token = await getSync("token").then(res=>{
    return res.token
  })
  if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.authorization = decodeURI(token)  //请求头加上token
  } */
  return config
  },
  err => {
      return Promise.reject(err)
  }
)

// http response 拦截器
myAxios.interceptors.response.use(
  response => {
    //拦截响应，做统一处理 
    //console.log(resopnse)
    return response.data
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    console.log(error)
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  }
)

export default myAxios