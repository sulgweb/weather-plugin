/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:42:13
 * @LastEditTime: 2021-01-14 15:15:09
 * @Copyright: 1.0.0
 */
//import { createApp } from 'vue'
import app from './components/app.vue'
import myVue from "@/utils/myVue.js"

const myApp = myVue(app)
myApp.mount('#app')
