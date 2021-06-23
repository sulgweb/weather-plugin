/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-06-13 15:29:37
 * @LastEditTime: 2021-06-24 00:02:39
 */
import hotReload from '@/utils/hotReload'
import api from "@/api/index.js"
import { getCurrentTabId } from "../utils/chrome"

hotReload()
console.log('this is background main.js')

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  sendResponse(sender)
  let requectFunc = {
    getWeatherData:async data =>{
      let areaLocation = await api.weatherApi.getAreaLocation()
      let areaId = await api.weatherApi.getAreaId(areaLocation.lat,areaLocation.lng)
      let weatherData = await api.weatherApi.getWeather(areaId)
      longConnectMsgSend('content',{name:'getWeatherData',weatherData})
    }
  }
  requectFunc[request.name] && requectFunc[request.name](request.data)
});

// chrome长连接消息发送
async function longConnectMsgSend(type,data){
  let connectObj = {
    content:"sulg-long-connect-content",
    popup:"sulg-long-connect-popup"
  }
  let tabId = await getCurrentTabId()
  let port = chrome.tabs.connect(tabId, {name: connectObj[type]});
  port.postMessage(data)
}