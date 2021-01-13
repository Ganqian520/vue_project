<template>
	<div id="box" >
		<div id="content" >
			<div>
<<<<<<< HEAD
<<<<<<< HEAD
			<img :src="data.imgurl" class="l" />
=======
			<img src="" class="l" />
>>>>>>> parent of c72b53a... 改动
=======
			<img src="../../../public/imgs/1.jpg" class="l" />
>>>>>>> parent of fd13eab... 改动3
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;">提高小学生的作文能力的基本途径</span>
				<i class="el-icon-time r">1999.12.13</i>
			</div>
<<<<<<< HEAD
<<<<<<< HEAD
			
=======
			<div style="position: absolute;top: 70px;text-align: left;left: 190px;">
				<span style="margin-right: 20px;display: block;color: #999999;">名师指导：提高小学生的作文能力的基本途径，一篇文章怎样开头，采用哪种方法，一定要从文章中心表达的需要出发，适应不同体裁的特点做到新颖明快，言简意赅。</span>
			</div>
>>>>>>> parent of c72b53a... 改动
=======
			<div style="position: absolute;top: 70px;text-align: left;left: 190px;">
				<span style="margin-right: 20px;display: block;color: #999999;">{{data.content}}</span>
			</div>
>>>>>>> parent of fd13eab... 改动3
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<i class="el-icon-user-solid" style="font-size: 18px;"></i>
				<span style="margin:0 10px;">余老师</span>
				<el-button size="small" style="width: 80px;">语文</el-button>
				<i class="el-icon-thumb" style="position: absolute;right: -300px;bottom: 0;">777</i>
				<i class="el-icon-thumb" style="position: absolute;right: -360px;bottom: 0;">777</i>
				
			</div>
		</div>
		<div id="content" >
			<div>
			<img src="" class="l" />
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;">提高小学生的作文能力的基本途径</span>
				<i class="el-icon-time r">1999.12.13</i>
			</div>
			<div style="position: absolute;top: 70px;text-align: left;left: 190px;">
				<span style="margin-right: 20px;display: block;color: #999999;">名师指导：提高小学生的作文能力的基本途径，一篇文章怎样开头，采用哪种方法，一定要从文章中心表达的需要出发，适应不同体裁的特点做到新颖明快，言简意赅。</span>
			</div>
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<i class="el-icon-user-solid" style="font-size: 18px;"></i>
				<span style="margin:0 10px;">余老师</span>
				<el-button size="small" style="width: 80px;">语文</el-button>
				<i class="el-icon-thumb" style="position: absolute;right: -300px;bottom: 0;">777</i>
				<i class="el-icon-thumb" style="position: absolute;right: -360px;bottom: 0;">777</i>
				
			</div>
		</div>
		<div id="content" >
			<div>
			<img src="" class="l" />
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;">提高小学生的作文能力的基本途径</span>
				<i class="el-icon-time r">1999.12.13</i>
			</div>
			<div style="position: absolute;top: 70px;text-align: left;left: 190px;">
				<span style="margin-right: 20px;display: block;color: #999999;">名师指导：提高小学生的作文能力的基本途径，一篇文章怎样开头，采用哪种方法，一定要从文章中心表达的需要出发，适应不同体裁的特点做到新颖明快，言简意赅。</span>
			</div>
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<i class="el-icon-user-solid" style="font-size: 18px;"></i>
				<span style="margin:0 10px;">余老师</span>
				<el-button size="small" style="width: 80px;">语文</el-button>
				<i class="el-icon-thumb" style="position: absolute;right: -300px;bottom: 0;">777</i>
				<i class="el-icon-thumb" style="position: absolute;right: -360px;bottom: 0;">777</i>
				
			</div>
		</div>
		<div id="content" >
			<div>
			<img src="" class="l" />
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;">提高小学生的作文能力的基本途径</span>
				<i class="el-icon-time r">1999.12.13</i>
			</div>
			<div style="position: absolute;top: 70px;text-align: left;left: 190px;">
				<span style="margin-right: 20px;display: block;color: #999999;">名师指导：提高小学生的作文能力的基本途径，一篇文章怎样开头，采用哪种方法，一定要从文章中心表达的需要出发，适应不同体裁的特点做到新颖明快，言简意赅。</span>
			</div>
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<i class="el-icon-user-solid" style="font-size: 18px;"></i>
				<span style="margin:0 10px;">余老师</span>
				<el-button size="small" style="width: 80px;">语文</el-button>
				<i class="el-icon-thumb" style="position: absolute;right: -300px;bottom: 0;">777</i>
				<i class="el-icon-thumb" style="position: absolute;right: -360px;bottom: 0;">777</i>
				
			</div>
		</div>
	
	
		
	</div>
</template>

<script>
<<<<<<< HEAD
	export default{
		data(){
			return{
				datalist:[]
			}
		},
		methods:{
			enterDetail(id){
				localStorage.contentId = id
				this.$router.push('/detail')
			}
		},
		mounted() {
		return this.axios.post('http://localhost:8080/famousteacher/getmsg') //当页面加载时,返回
        .then(ret => {
			this.datalist=ret.data
		})
		}
	}
=======
>>>>>>> parent of c72b53a... 改动
</script>

<style scoped lang="less">
	#box{
		// border: 1px solid black;
		width: 300px;
		// height: 500px;
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
	#content{
		border-bottom: 1px #ccc solid;
		position: relative;
		width: 100%;
		// margin-right: 200px;
		// height: 200px;
		// border: solid 1px black;
		box-sizing: border-box;
		padding: 25px 25px;
		img{
			margin-right: 10px;
			width: 160px;
			height: 140px;
		}
		
		
		
	}
</style>
