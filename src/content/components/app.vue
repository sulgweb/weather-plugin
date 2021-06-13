<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:40:31
 * @LastEditTime: 2021-01-14 13:47:27
 * @Copyright: 1.0.0
-->
<template>
	<div class="content_page">
		sulg-plugin-cli content
		<div class="content_page_main">
			<div v-for="(item,index) in dataList" :key="index">
				<el-link :href="item.video" type="primary" target="_blank">{{item.text}}</el-link>
			</div>
			<div>
				<el-button type="primary" size="mini" @click="searchBtn">api-test</el-button>
			</div>
			<div ref="myChart" style="width:300px;height:200px"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				dataList:[
					{
						text:"data_1"
					},
					{
						text:"data_2"
					},
					{
						text:"data_3"
					}
				]
			}
		},
		mounted(){
			this._initData()
		},
		methods:{
			/**
			* @description: 数据初始化
			* @Date: 2021-01-14 13:31:30
			* @author: 小羽
			* @param {*}
			* @return {*}
			*/
			_initData(){
				
				this.drawEchart()
			},

			/**
			 * @description: 搜索按钮
			 * @Date: 2021-01-14 13:44:47
			 * @author: 小羽
			 * @param {*}
			 * @return {*}
			 */	
			searchBtn(){
				this.searchFunc()
			},

			/**
			 * @description: 搜索方法
			 * @Date: 2021-01-14 13:43:13
			 * @author: 小羽
			 * @param {*}
			 * @return {*}
			 */
			searchFunc(){
				this.$api.testApi.test().then(res=>{
					this.dataList = res.result
					console.log(this.dataList)
				})
			},

			/**
			* @description: 绘制echart图表
			* @Date: 2021-01-14 13:32:07
			* @author: 小羽
			* @param {*}
			* @return {*}
			*/
			drawEchart(){
				let options = {
					title: {
						text: 'ECharts 入门示例'
					},
					grid:{
						bottom:20,
						right:0
					},
					tooltip: {},
					xAxis: {
						data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				}
				this.$nextTick(()=>{
					let myChart = this.$echarts.init(this.$refs.myChart);
					myChart.setOption(options)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content_page{
		text-align: left;
    background: #fff;
    box-shadow: 0 0 5px #999;
    padding: 10px;
		//color: red;
		position: fixed;
		z-index: 100001;
		right: 0;
		bottom: 0;
		.content_page_main{
			//color: green;
		}
	}
</style>


