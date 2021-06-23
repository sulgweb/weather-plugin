<!--
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-06-13 15:29:37
 * @LastEditTime: 2021-06-24 00:16:12
-->
<template>
	<div class="index-page">
		<div class="index-page-main">
			<h1 class="chrome-title">掘金天气插件</h1>
			<div class="chrome-description">这是一个chrome天气插件，可作用于掘金网站。</div>
			<el-link href="/weather-plugin.zip" type="primary" target="_blank">下载</el-link>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.index-page{
    display: flex;
		justify-content: center;
		&-main{
			text-align: center;
			width: 300px;
			border: solid 1px #eee;
			padding: 0 30px 30px 30px;
			.chrome{
				&-title{}
				&-description{
					text-indent: 2em;
					text-align: left;
				}
			}
		}
	}
</style>