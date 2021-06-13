/*
 * @description: api接口统一出口
 * @author: 小羽
 * @Date: 2021-01-13 15:40:11
 * @LastEditTime: 2021-01-13 15:42:05
 * @Copyright: 1.0.0
 */
const commonApiObj = {}

let files = require.context('./modules', true, /\.js$/)
files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    commonApiObj[newKey+"Api"] = require(`./modules/${newKey}`).default;
})
export default commonApiObj
