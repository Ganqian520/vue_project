<template>
	<div id="box" v-if="datalist" >
		<div id="content" v-for="data in datalist" :key="data.id"  >
			<div>
			<img :src="data.titlepictureurl" class="l" />
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;">活动标题:{{data.title}}</span>
				<i class="el-icon-time r">开始时间{{data.starttime}}</i>
				<i class="el-icon-time r" id="jieshushijian">结束时间{{data.endtime}}</i>
				<div class="dizhi">活动地址:{{data.address}}</div>
				<div class="miaoshu">活动描述:{{data.content}}</div>
			</div>
			
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<i class="el-icon-user-solid" style="font-size: 18px;"></i>
				<span style="margin:0 10px;">活动管理人:{{data.organizerusername}}</span>
				
			</div>
			<el-button @click="check(data.id)" style="margin-top:40px">活动成员</el-button>

			
			
		</div>
		
		<el-dialog title="活动成员" :visible.sync="dialogTableVisible">
		<el-table :data="userlist">
			<el-table-column property="username" label="用户名" width="150"></el-table-column>
			
		</el-table>
	</el-dialog>


	
		
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return{
				datalist:[],
				userlist:[],
				dialogTableVisible: false,
			}
		},
		methods:{
		check(id){
			axios.post('http://127.0.0.1:8080/Useractivity/getMymanagerActivitypeople',{
			"id": id
		}) //当页面加载时,返回
        .then(ret => {
			this.dialogTableVisible = true
			// this.datalist=ret.data;
			this.userlist = ret.data
			console.log(ret.data);
		})
			

		}
			
		},
		mounted() {
		return this.axios.post('http://127.0.0.1:8080/Useractivity/getMymanagerActivityMsg',{
			"username": localStorage.username
		}) //当页面加载时,返回
        .then(ret => {
			this.datalist=ret.data;
			console.log(ret.data);
		})
		}
	}
</script>

<style scoped lang="less">
	.clear {
		position: relative;
	}
	.clear .miaoshu {
		position: absolute;
		left: 0px;
		top: 140px;
	}
	.clear #jieshushijian {
		position: absolute;
		left: 901px;
		top: 25px;
	}
	.clear .dizhi {
		position: absolute;
		left: 193px;
		top: 92px;
		color: #999999;
	}
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
