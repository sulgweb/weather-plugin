/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-06-13 15:29:37
 * @LastEditTime: 2021-06-16 01:51:28
 */
import { createApp } from 'vue'
import api from "@/api/index.js"
import elementNeed from "./elementNeed"
const echarts = require("echarts")
//import elementPlus from "element-plus"
//import "element-plus/lib/theme-chalk/index.css";


function myVue(app){
  const myApp = createApp(app)
  
  //myApp.use(elementPlus)
  // 按需引入element plus组件
  for(let item of elementNeed){
    myApp.use(item)
  }

  // 注入到vue中
  myApp.config.globalProperties.$echarts = echarts;
  myApp.config.globalProperties.$api = api
  return myApp
}

export default myVue