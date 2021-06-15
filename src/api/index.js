/*
 * @Description: api接口统一出口
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-06-13 15:29:37
 * @LastEditTime: 2021-06-16 01:49:41
 */

const commonApiObj = {}

let files = require.context('./modules', true, /\.js$/)
files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    commonApiObj[newKey+"Api"] = require(`./modules/${newKey}`).default;
})
export default commonApiObj
