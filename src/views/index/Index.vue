<template>
	<div id="box">
		<swipe></swipe>
		
		<div id="box1"  >
			<div class=" active">
				<el-button type="primary" round>活动推荐</el-button>
				<el-button  round>最新活动</el-button>
			</div>
			<div class="clear">
				<ul>
					<li class="l">
						<div class="activecontent">123</div>
					</li>
					<li class="l">
						<div class="activecontent">123</div>
					</li>
					<li class="l">
						<div class="activecontent">123</div>
					</li>
					<li class="l">
						<div class="activecontent">123</div>
					</li>
					<li class="l">
						<div class="activecontent">123</div>
					</li>
					<li class="l">
						<div class="activecontent"></div>
					</li>
					<li class="l">
						<div class="activecontent"></div>
					</li>
					<li class="l">
						<div class="activecontent"></div>
					</li>
				</ul>		
			</div>
			
			<div class="block">
			  <el-pagination
			    layout="prev, pager, next"
			    :total="50">
			  </el-pagination>
			</div>
		</div>
		
		
		<div id="box2" class="clear" >
			<div class="r aside">
				
				<div style="position: relative;">
					<span class="asideSpan1">热门文章</span>
					<span class="asideSpan2" >更多</span>
				</div>
				
			</div>
			
			<div class="article">
				<el-button type="primary" round>文章推荐</el-button>
				<el-button  round>最新文章</el-button>
			</div>
			<div >
				<ul>
					<li>
						<div class="articlecontent"></div>
					</li>
					<li>
						<div class="articlecontent"></div>
					</li>
					<li>
						<div class="articlecontent"></div>
					</li>
				</ul>
			</div>
			
			
			<div class="block">
			  <el-pagination
			    layout="prev, pager, next"
			    :total="50">
			  </el-pagination>
			</div>
		</div>
		
	</div>
</template>

<script>
	import swipe from '../../components/swiper.vue'
export default {
  name: "Index",
  data() {
    return{
		
    }
  },
  components:{
	  swipe
  }
}
</script>

<style  scoped>
	.asideSpan1{
		position: absolute;left: 0;top: 0px;line-height: 20px;
	}
	.asideSpan2{
		position: absolute;right: 0;top: 0px;line-height: 20px;
	}
	.aside{
		
		border: 1px solid black;
		width: 350px;
		height: 500px;
		margin-top: 30px;
	}
	.clear:after{
		content: ' ';
		display: block;
		clear: both;
	}
	.clear{
	        *zoom: 1;
	    }
	.l{
		float: left;
	}
	.r{
		float: right;
	}
	.active,.article{
		text-align: left;
		height: 100px;
		line-height: 100px;
		margin-left: 50px;
	}
	.activecontent{
		height: 300px;
		width: 200px;
		margin: 20px;
		/* position: absolute; */	
		background-color: #ccc;
		
	}
	ul{
		list-style: none;
	}
	.articlecontent{
		margin: 20px;
		width: 600px;height: 100px;  border: 1px solid black;
	}
	#box1{
		border-bottom: 5px solid white;
	}
</style>