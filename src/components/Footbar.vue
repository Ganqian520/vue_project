<template>
	<div id="box">
		<div class="l">
			<div class="circle l"></div>
			<span>网站首页</span>
			<span>帮主中心</span>
			<span>联系我们</span>
		</div>
		<div class="r">
			<i class="el-icon-phone">联系电话:17394943268</i>
		</div>
	</div>
</template>

<script>
	export default {
	   
	  }
</script>

<style scoped="scoped">
	.circle{
		height: 50px; width: 50px; border-radius: 50%; background-color: red
	}
	#box{
		
		padding: 50px 200px;
	}
	span{
		margin: 0 20px;
	}
	.l{
		float: left;
	}
	.r{
		float: right;
	}
</style>
