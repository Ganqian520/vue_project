<template>
	<div id="box">
		
		
		
		<main>
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="全部文章" name="all" >
					<articlecontent ></articlecontent>
				</el-tab-pane>
<<<<<<< HEAD

=======
			    <el-tab-pane label="数学" name="math">数学</el-tab-pane>
			    <el-tab-pane label="语文" name="chinese">语文</el-tab-pane>
			    <el-tab-pane label="英语" name="english">英语</el-tab-pane>
				<el-tab-pane label="科学" name="science">科学</el-tab-pane>
>>>>>>> parent of c72b53a... 改动
			  </el-tabs>
			  <el-button @click="submit()">申请文章</el-button>
		</main>
	
	</div>
</template>

<script>
	import articlecontent from './famousteacher/Articlecontent.vue'
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
	  },
	  submit(){
		  this.$router.push('/submitteacher')
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
		width: 100%;
		height: 100%;
		/* border: 1px solid black; */
		background-color: white;
		
	}
	p{
		color: #999999;
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
