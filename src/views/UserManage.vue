<template>
		<el-container>
		  <el-header>
			  <el-page-header  @back="back()" content="角色管理">
			  </el-page-header>
			 
		  </el-header>
		  <el-container>
		    
		    <el-main>
				<el-form  class="demo-form-inline" style="text-align: left;">			 
				  <el-form-item>
				    <el-button type="primary" @click="addDiaLog = true
">增加角色</el-button>
				  </el-form-item>
				</el-form>
				<el-table
				    :data="tableData"
				    style="width: 100%"
				    >
					<el-table-column
					prop="id"
					  label="id"
					  width="180"
					  align="center"
					  
					  >
					  
					</el-table-column>
				    <el-table-column
				      prop="rolename"
				      label="角色名"
				      width="180"
					  align="center">
				    </el-table-column>
				    <el-table-column
				      prop="resolve1"
				      label="角色描述"
				      width="180"
					  align="center">
				    </el-table-column>
					<el-table-column  
					  label="操作"
					  align="center">
					  <template slot-scope="scope">
					  					 
					 <el-button type="primary" icon="el-icon-edit" @click="show(scope.$index)" circle></el-button>
					 <el-button type="danger" icon="el-icon-delete" @click="deleteRole(scope.row.id)" circle></el-button>
					</template>
					 
					</el-table-column>
				  </el-table>
			</el-main>
		  </el-container>
		  
		  <el-dialog title="修改用户" :visible.sync="dialogFormVisible">
		  				<el-form >
		  				<el-form-item label="角色名" >
		  				      <el-input v-model="tableData[temp].name" ref="username" autocomplete="off"></el-input>
		  				</el-form-item>
		  				<el-form-item label="角色描述"   >
		  				      <el-input v-model="tableData[temp].desc"  autocomplete="off"></el-input>
		  				</el-form-item>
		  				</el-form>
		  				<div slot="footer" class="dialog-footer">
		  				    <el-button @click="dialogFormVisible = false">取 消</el-button>
		  				    <el-button type="primary" @click="dialogFormVisible = false" >确 定</el-button>
		  				</div>
		  </el-dialog>
		  
		  <el-dialog title="添加用户" :visible.sync="addDiaLog">
				<el-form >
				<el-form-item label="角色名" >
				      <el-input v-model="addData.name" ref="username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="角色描述"   >
				      <el-input v-model="addData.desc"  autocomplete="off"></el-input>
				</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
				    <el-button @click="addDiaLog = false">取 消</el-button>
				    <el-button type="primary" @click="addRole()">确 定</el-button>
				</div>
		  </el-dialog>
		</el-container>
</template>

<script>
	import Vue from 'vue'
	// vue.filter(")
	  export default {
	    data() {
	      return {
			  addData:{
				  name:'',
				  desc:''
			  },
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
							  addDiaLog:false,
							  temp:0,
	      };
		},
		mounted:function(){
     	return this.axios.post('http://localhost:8080/role/findAll') //当页面加载时,返回
        .then(ret => {
			console.log(ret.data);
          this.tableData=ret.data.context;console.log(this.tableData)
        })
    },
		methods:{
			
			back(){
				this.$router.push('/index')
			},
			show(data){
				// console.log(data)
				this.temp =	data
				// console.log(this.temp)
				 this.dialogFormVisible = true
				
			},
			addRole(){ 								// console.log(this.$refs.username.$el)
				 return this.axios.post('http://localhost:8080/role/addRole',{
					 
        
          "rolename":this.addData.name,
		  "resolve1":this.addData.desc},
		 
        
      ) .then(ret => {
         console.log(ret.data);
			if(ret.data.context=='添加成功') {
				alert('添加成功');
			}
          
		});
		
				this.addDiaLog = false
				this.tableData.push(this.addData)
				 console.log(this.tableData)	
				this.addData={
					name:'',
					desc:''
				}
			},
			deleteRole(data){
				console.log(data)
				
				return this.axios.post('http://localhost:8080/role/deleteRole',{
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
