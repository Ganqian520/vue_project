<template>
		<el-container>
		  <el-header>
			  <el-page-header  @back="back()" content="权限管理">
			  </el-page-header>
			 
		  </el-header>
		  <el-container>
		    
		    <el-main>
				
				<el-table
				    :data="tableData"
				    style="width: 100%"
				    >
					<el-table-column
					prop="userid"
					  label="id"
					  width="180"
					  align="center"
					  
					  >
					  
					</el-table-column>
				   
				    <el-table-column
				      
				      label="权限"
				      width="180"
					  align="center">
					  <template slot-scope="scope"> <span> {{scope.row.roleid | roleName}} </span></template>
				    </el-table-column>
					<el-table-column  
					  label="操作"
					  align="center">
					  <template slot-scope="scope">
					  					 
					 <el-button type="primary" @click="show(scope.row.userid)">赋予权限</el-button>
					  <el-button type="danger" @click="del(scope.row.userid,scope.row.roleid)" >删除权限</el-button>
					</template>
					 
					</el-table-column>
				  </el-table>
			</el-main>
		  </el-container>
		  
		  <el-dialog title="赋予权限" :visible.sync="dialogFormVisible">
		  				<el-form >
		  				<el-radio-group v-model="radio">
							  <el-radio :label="1">普通用户</el-radio>
							  <el-radio :label="2">辅导员</el-radio>
							  <el-radio :label="3">管理员</el-radio>
		  				</el-radio-group>
		  				</el-form>
		  				<div slot="footer" class="dialog-footer">
		  				    <el-button @click="dialogFormVisible = false">取 消</el-button>
		  				    <el-button type="primary" @click="editPower()" >确 定</el-button>
		  				</div>
		  </el-dialog>
		  
		  
		</el-container>
</template>

<script>
	import Vue from 'vue'
	Vue.filter('roleName',(data)=>{
		
		if(data==1) return '普通用户'
		if(data==2) return '辅导员'
		if(data==3) return '管理员'
	})
	// vue.filter(")
	  export default {
	    data() {
	      return {
			  addData:{
				  name:'',
				  desc:''
			  },
			  
			  selectUserId:0,
			  radio:1,
	        // tabPosition: 'left',
					   tableData: [
							 {
								id:'1',
					            name: '陈鹏元',
					            desc: '打上单撒大所多撒多',					          
					          },
							  {			id:'2',
							           name: '余奇懋',
							           desc: '打工人',					          
							         },
							  ],
							  dialogFormVisible: false,
							
							  temp:0,
	      };
		},
		mounted:function(){
     	return this.axios.post('http://127.0.0.1:8080/role/getAll') //当页面加载时,返回
        .then(ret => {
			this.tableData =ret.data
			//this.radio=ret.data.roleid
          console.log(ret.data);
        })
	},
		
		methods:{
			del(userid,roleid){
					console.log(userid)
					console.log(roleid)
					return this.axios.post('http://127.0.0.1:8080/role/delRoleFromUser',{
						'userid': userid,
						'roleid':roleid
					}).then(res=>{
						if(res.status==200){
							alert('删除成功')
						}
					})
			},
			editPower(){
				// console.log('role',this.radio)
				// console.log('userid',this.selectUserId)
				return this.axios.post('http://127.0.0.1:8080/role/addRoleToUser',{
					userid : this.selectUserId,
					roleid : this.radio
				}).then(res=>{
					console.log(res)
					if(res.status==200){
						alert('赋予权限成功')
					}
					this.dialogFormVisible = false
				})
				
			},
			back(){
				this.$router.push('/index')
			},
			show(data){
				// console.log('haha',data)
				this.selectUserId=data
				this.temp =	data
				// console.log(this.temp)
				 this.dialogFormVisible = true
				
			},
			
			deleteRole(data){
				console.log(data)
				
				return this.axios.post('http://127.0.0.1:8080/role/deleteRole',{
					'id' : data
				}).then(res=>{
					if(res.status==200){
						console.log('删除成功');
						alert('删除成功')
					}
				
				})
			}
			
		},
	  };
</script>

<style>
</style>
