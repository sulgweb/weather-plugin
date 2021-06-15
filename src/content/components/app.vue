<!--
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-06-15 23:09:55
 * @LastEditTime: 2021-06-16 01:48:55
-->
<template>
  <div class="content-page">
    <div class="content-page-main" v-if="weatherData.current">
      <div class="content-page-main-left">
        <div class="weather-temp">
          <span class="weather-temp-num">{{weatherData.current.temp}}</span>
          <span class="weather-temp-symbol">°C</span>
          <span class="weather-temp-type">{{weatherData.current.weather}}</span>
        </div>
        <div class="weather-other">
          <div class="weather-other-item">湿度：{{weatherData.current.SD}} |</div>
          <div class="weather-other-item">PM2.5：{{weatherData.current.aqi_pm25}}</div>
        </div>
      </div>
      <div class="content-page-main-right">
        <div>{{weatherData.current.cityname}} {{weatherData.current.date}}</div>
        <div>更新时间： {{weatherData.current.time}}</div>
        <div>{{weatherData.current.WD}}</div>
      </div>      
    </div>
    <div ref="myChart" class="chart-box"></div>
  </div>
</template>

<script>
import { sortConnectMsgSend } from "../../utils/chrome";
export default {
  data() {
    return {
      //weatherData:{}
      weatherData:{
        
      }
    };
  },
  async mounted() {
    await this._initData();
  },
  methods: {
    /**
     * @description: 数据初始化
     * @Date: 2021-01-14 13:31:30
     * @author: 小羽
     * @param {*}
     * @return {*}
     */
    async _initData() {
      sortConnectMsgSend({ name: "getWeatherData",data:{}})
      chrome.runtime.onConnect.addListener(port=>{
        if(port.name == 'sulg-long-connect-content') {
          port.onMessage.addListener(msg => {
            console.log('收到长连接消息：', msg);
            if(msg.name === "getWeatherData"){
              this.weatherData = msg.weatherData
              console.log(this.weatherData.current)
              this.drawEchart()
            }
          });
        }
      });
    },

    drawEchart(){
      let timeList = [],hightTemp = [],lowTemp = []
      for(let i = 0;i<7;i++){
        let current = this.weatherData.list.datas[i]
        timeList.push(current.tm.match(/(\d{4})(\d{2})(\d{2})/).filter((item,index) => index > 0).join('-'))
        hightTemp.push(current.max)
        lowTemp.push(current.min)
      }
      let  options = {
              tooltip: {
                  trigger: 'axis'
              },
              color:["#ffdc51","#9dc0f7"],
              grid:{
                bottom:10,
                right:35,
                containLabel:true
              },
              legend: {
                  data: ['最高气温', '最低气温']
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: timeList
              },
              yAxis: {
                  type: 'value',
                  axisLabel: {
                      formatter: '{value} °C'
                  }
              },
              series: [
                  {
                      name: '最高气温',
                      type: 'line',
                      data: hightTemp,
                      markPoint: {
                          data: [
                              {type: 'max', name: '最大值'},
                          ]
                      }
                  },
                  {
                      name: '最低气温',
                      type: 'line',
                      data: lowTemp,
                      markPoint: {
                          data: [
                              {type: 'min', name: '最小值'}
                          ]
                      },
                      
                  }
              ]
          };
        this.$nextTick(()=>{
					let myChart = this.$echarts.init(this.$refs.myChart);
					myChart.setOption(options)
				})
    }
  },
};
</script>

<style lang="less" scoped>
.content-page {
  text-align: left;
  background: #1e77e9;
  color: #fff;
  box-shadow: 0 0 5px #999;
  padding: 10px;
  //color: red;
  position: fixed;
  z-index: 100001;
  right: 0;
  bottom: 0;
  &-main {
    display: flex;
    margin-bottom: 10px;
    &-left{
      width: 50%;
      .weather-temp{
        display: flex;
        align-items: flex-start;
        &-num{
          font-size: 32px;
          font-weight: bold;
        }
        &-type{
          margin-left: 5px;
        }
      }
      .weather-other{
        display: flex;
        align-items: center;
        &-item{
          margin-right: 5px;
        }
      }
    }
    &-right{
      width: 50%;
      text-align: right;
    }
  }
  .chart-box{
    width: 300px;
    height: 200px;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>


