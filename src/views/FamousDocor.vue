<template>
	<div id="box">
		
		<aside class="r">
			<div id="aside-head" class="clear">
				<span class="l" style="font-weight: bold;">热门文章</span>
				<span class="r"><i class="el-icon-refresh-right"></i>换一批</span>
			</div>
			<div class="aside-box">
				
				<div id="aside-content">
					<h2>界面设计必备，常用字体规范</h2>
					<p style="margin: 0;">这不仅仅是一篇经验，而是前辈用日积月累得工作心得，用笔记用脑想，最重要得是要...</p>
				</div>
				<div id="aside-foot">
					<i class="el-icon-user-solid" style="font-size: 25px;"></i>
					<span style="margin:0 20px 0 5px;">yqmyqm</span>
					<i class="el-icon-time ">1999.12.13</i>
				</div>
			</div>
			
			<div class="aside-box">
				
				<div id="aside-content">
					<h2>界面设计必备，常用字体规范</h2>
					<p style="margin: 0;">这不仅仅是一篇经验，而是前辈用日积月累得工作心得，用笔记用脑想，最重要得是要...</p>
				</div>
				<div id="aside-foot">
					<i class="el-icon-user-solid" style="font-size: 25px;"></i>
					<span style="margin:0 20px 0 5px;">yqmyqm</span>
					<i class="el-icon-time ">1999.12.13</i>
				</div>
			</div>
			
			<div class="aside-box">
				<div id="aside-content">
					<h2>界面设计必备，常用字体规范</h2>
					<p style="margin: 0;">这不仅仅是一篇经验，而是前辈用日积月累得工作心得，用笔记用脑想，最重要得是要...</p>
				</div>
				<div id="aside-foot">
					<i class="el-icon-user-solid" style="font-size: 25px;"></i>
					<span style="margin:0 20px 0 5px;">yqmyqm</span>
					<i class="el-icon-time ">1999.12.13</i>
				</div>
			</div>
		</aside>
		
		<main>
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="全部文章" name="all" >
					<articlecontent ></articlecontent>
				</el-tab-pane>
			    <el-tab-pane label="每日健康" name="math">每日健康</el-tab-pane>
			    <el-tab-pane label="饮食建议" name="chinese">饮食建议</el-tab-pane>
			    <el-tab-pane label="急救知识" name="english">急救知识</el-tab-pane>
				<el-tab-pane label="疾病预防" name="science">疾病预防</el-tab-pane>
			  </el-tabs>
		</main>
	</div>
</template>

<script>
	import articlecontent from './famousDoctor/Articlecontent.vue'
  export default {
    data() {
      return {
        activeName: 'all'
      };
    },
	components:{
		articlecontent
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped >
	#box{
		/* border: 1px solid black; */
		width: 100%;
		/* height: 1200px; */
	}
	main{
		width: 750px;
		height: 100%;
		/* border: 1px solid black; */
		background-color: white;
		
	}
	aside{
		margin-top: 20px;
		height:500px;
		width: 300px;
		padding: 0 20px;
		/* border: 1px solid black; */
	}
	.aside-box{
		margin: 10px 0;
		border-bottom: 1px solid #999999;
	}
	p{
		color: #999999;
	}
	h2{
		font-size: 18px;
		margin: 0;
	}
	#aside-head{
		margin-bottom:20px;
	}
	#aside-content{
		text-align: left;
	}
	#aside-foot{
		margin: 10px 0;
		text-align: left;
		color: #999999;
	}
	.r{
		float: right;
	}
	.l{
		float: left;
	}
	.clear::after{
		content: '';
		display: block;
		clear: both;
	}
</style>
