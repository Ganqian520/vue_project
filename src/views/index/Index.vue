<template>
	<el-container class="home-container">
<!--                头部header(五部分)
					1、logo
					2、首页-更多
					3、搜索
					4、上传
					5、注册、登录
 -->
		<el-header>
			<!-- logo -->
			<!-- <div class="logo_part"><img src="@/assets/home-logo.jpg" alt=""></div> -->
			<!-- 首页-更多 -->
			<div class="part_one">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">首页</el-menu-item>
				  <el-menu-item index="2">名师堂</el-menu-item>
				  <el-menu-item index="3">名医馆</el-menu-item>
				  <el-menu-item index="4">广播站</el-menu-item>
				  <el-menu-item index="5">志愿活动</el-menu-item>
				  <el-submenu index="6">
				    <template slot="title">更多</template>
				    <el-menu-item index="6-1">发布公告</el-menu-item>
				    <el-menu-item index="6-2">申请活动</el-menu-item>
				  </el-submenu>
				</el-menu>
			</div>
			<!-- 搜索 -->
			<div class="part_two">
				<template>
				  <el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
				</template>
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
			<!-- 上传-->
			<div class="part_thr">
				<template>
				  <el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
				</template>
				<el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :before-remove="beforeRemove"
				  multiple
				  :limit="3"
				  :on-exceed="handleExceed"
				  :file-list="fileList">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
			<!-- 登录、注册 -->
			<div class="part_for">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">注册</el-menu-item>
				  <el-menu-item index="1">登录</el-menu-item>
				</el-menu>
				
			</div>
		</el-header>
		
<!--                身体main                     -->
		<el-main>			
		身体
		</el-main>
		
<!--                尾部footer                      -->
		<el-footer>
		尾部
		</el-footer>
		
	</el-container>
</template>

<script>
/*---------------------  头部header  ---------------------*/
	/* ---------- */
export default {
	data() {
		return {
			activeIndex: '1',
			activeIndex: '2',
			activeIndex: '3',
			activeIndex: '4',
			activeIndex: '5',
			activeIndex6: '1'
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>

<style>
	.home-container{
		height: 100%;
	}
/*---------------------  头部header  ---------------------*/
	.el-header{
		color:#9090a3;
	}
	
/*---------------------  身体main  ---------------------*/
	.el-main{
		color:#769ea4 ;
	}
/*---------------------  尾部footer  ---------------------*/
	.el-footer{
		color: #211b1b;
	}
	
	
</style>

