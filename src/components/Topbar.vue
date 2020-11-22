<template>
	<div id="box">
		<div class="circle l"></div>
		<el-menu :default-active="$route.path" class="el-menu-demo l" mode="horizontal"  router >
			<el-menu-item index="/index">
				首页
			</el-menu-item>
			<el-menu-item index="/famousteacher">
				名师堂
			</el-menu-item>
			<el-menu-item index="/famousedocor">
				名医馆
			</el-menu-item>
			<el-menu-item index="/">
				广播站
			</el-menu-item>
			<el-menu-item index="/">
				支援活动
			</el-menu-item>				
			 <el-submenu index="6">
			    <template slot="title">更多</template>
			    <el-menu-item index="6-1">
					<router-link to="/index" tag="li"> 发布活动</router-link>
				</el-menu-item>
			    <el-menu-item index="6-2">
					<router-link to="/index" tag="li"> 申请公告</router-link>
				</el-menu-item>
			  </el-submenu>
	
		</el-menu>
		<div class="r">
			<el-button icon="el-icon-search" circle></el-button>
			<el-button icon="el-icon-upload2" circle></el-button>
			<div id="login">
				<el-button  icon="el-icon-user-solid" @click="login()">登录</el-button>
				<el-button  icon="el-icon-edit" @click="register()">注册</el-button>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      };
	    },
	    methods: {
	      login(){
			  this.$router.push('/login')
		  },
		  register(){
		  			  this.$router.push('/register')
		  },
	    }
	  }
</script>

<style scoped="scoped">
	#box{
		padding: 0 200px;
	}
	.circle{
		height: 50px; width: 50px; border-radius: 50%; background-color: red;margin-right: 50px;
	}
	.l{
		float: left;
	}
	.r{
		float: right;
	}
	#login{
		margin-left: 40px;
		float: right;
	}
</style>
