<template>
	<div id="box">
		<div class="circle l"></div>
		<el-menu :default-active="$route.path" class="el-menu-demo l" mode="horizontal"  router >
			<el-menu-item index="/index">
				首页
			</el-menu-item>				
			 <el-submenu index="1" v-if="userShow">
			    <template slot="title">{{$route.name | showName}}</template>
			    <el-menu-item index="/famousteacher">
			   	名师堂
			   </el-menu-item>
			   <el-menu-item index="/famousedocor">
			   	名医馆
			   </el-menu-item>
			   <el-menu-item index="/">
			   	支援活动
			   </el-menu-item>		
			   <el-menu-item index="/">
			   	申请活动
			   </el-menu-item>		
			</el-submenu>
			
			<el-submenu index="2" v-if="assShow">
			    <template slot="title">辅导员</template>
			    <el-menu-item index="/">
			   	审核名医馆
			   </el-menu-item>
			   <el-menu-item index="/">
			   	审核名师堂
			   </el-menu-item>
			   <el-menu-item index="/">
			   	审核活动
			   </el-menu-item>			
			</el-submenu>
	
			<el-submenu index="3" v-if="adminShow">
				<template slot="title">超级管理员</template>
				<el-menu-item index="/">
				权限管理
			   </el-menu-item>
			   <el-menu-item index="/usermanage">
				用户管理
			   </el-menu-item>
			  			
			</el-submenu>
		</el-menu>
		<div class="r">
			<el-button icon="el-icon-search" circle></el-button>
			<el-button icon="el-icon-upload2" circle></el-button>
			<el-button v-if="hasToken" @click="exit()" >退出</el-button>
			<div id="login" v-if="!hasToken">
				<el-button  icon="el-icon-user-solid" @click="login()">登录</el-button>
				<el-button  icon="el-icon-edit" @click="register()">注册</el-button>
			</div>
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	Vue.filter("showName",(data)=>{
		if(data==='index'){
			return '普通用户'
		}
		else{
			return data
		}
	})
	export default {
		
	    data() {
	      return {
			  hasToken:true,

			  userShow:true,
			  assShow:false,
			  adminShow:false
	      };
	    },
	    methods: {
			
	      login(){
			  this.$router.push('/login')
		  },
		  register(){
		  			  this.$router.push('/register')
		  },
		  exit(){
			  this.$router.push('login')
			  localStorage.token=''
			  localStorage.role=''
		  }
		},
		mounted() {
			if(localStorage.token){
				this.hasToken=true
			}else{
				this.hasToken=false
			}
			if(localStorage.role==3){
				
				this.adminShow = true
				this.assShow = true
				this.userShow = true
			}else if(localStorage.role==2){
				this.assShow = true
				this.userShow = true
				this.adminShow = false
			}else {
				this.userShow = true
				this.adminShow = false
				this.assShow = false
			}
	
		},	
		
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
