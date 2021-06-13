/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-13 15:41:45
 * @LastEditTime: 2021-01-13 17:46:24
 * @Copyright: 1.0.0
 */

import axios from "@/utils/http.js"

class Test{
  test(){
    return axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then(res=>{
      console.log(res)
      return res
    })
  }
}

const test = new Test()
export default test