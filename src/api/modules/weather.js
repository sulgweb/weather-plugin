import axios from "axios";


class Weather {
  // 获取地理坐标
  async getAreaLocation() {
    return await axios.get(`https://map.baidu.com/?qt=ipLocation&t=${new Date().getTime()}`).then(res => {
      if (!res.data.rgc || !res.data.rgc.result.location) {
        // 如果定位失败则返回广州的地理位置
        return {
          lat: 23.188855624765,
          lng: 113.45977672508
        }
      }
      return res.data.rgc.result.location
    })
  }

  // 获取id
  async getAreaId(lat, lng) {
    let params = { "method": "stationinfo", lat, lng }
    let res = await axios.get(`https://d4.weather.com.cn/geong/v1/api?params=${encodeURI(JSON.stringify(params))}`).then(res => res.data.data.station.areaid)
    return res
  }
  // 获取天气信息
  async getWeather(areaId) {
    console.log("areaId", areaId)
    let res1 = await axios.get(`https://d1.weather.com.cn/wap40/${areaId}.html?_=${new Date().getTime()}`).then(res => {
      return JSON.parse(res.data.split('=')[1])
    })
    let res2 = await axios.get(`https://d1.weather.com.cn/sk_2d/${areaId}.html?_=${new Date().getTime()}`).then(res => {
      return JSON.parse(res.data.split('=')[1])
    })
    return {
      list: res1,
      current: res2,
    }
  }
}

const weather = new Weather()
export default weather;