/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:39:58
 * @LastEditTime: 2021-01-13 17:46:32
 * @Copyright: 1.0.0
 */
import hotReload from '@/utils/hotReload'
import api from "@/api/index.js"

hotReload()
api.testApi.test()
console.log('this is background main.js')
