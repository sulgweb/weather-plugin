<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:42:06
 * @LastEditTime: 2021-01-13 15:28:43
 * @Copyright: 1.0.0
-->
<template>
	<div class="popup_page">
		sulg-plugin-cli popup
		<div class="popup_page_main">
			this is sulg-plugin-cli popup
			<div>
				<el-button type="primary" size="mini">popup button</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.popup_page{
    width: 200px;
		color: red;
		.popup_page_main{
			color: green;
		}
	}
</style>