<template>
		<el-container>
		  <el-header>
			  <el-page-header  content="详情页面">
			  </el-page-header>
			 
		  </el-header>
		  <el-container>
		    <el-aside width="200px">		 
				   <el-col >
				     <h5>管理功能</h5>
				     <el-menu
				       default-active="2"
				       class="el-menu-vertical-demo"
				       >
				       <el-submenu index="1">
				         <template slot="title">
				           <i class="el-icon-location"></i>
				           <span>陈鹏元</span>
				         </template>
				         <el-menu-item-group>				          
				           <el-menu-item index="1-1">陈鹏元1</el-menu-item>
				           <el-menu-item index="1-2">陈鹏元2</el-menu-item>
				         </el-menu-item-group>
				       </el-submenu>
				     </el-menu>
				   </el-col>
			</el-aside>
		    <el-main>
				<el-form :inline="true" :model="formInline" class="demo-form-inline" style="text-align: left;">
				  <el-form-item label="陈鹏元">
				    <el-input v-model="formInline.user" placeholder="陈鹏元" style="width: 300px;"></el-input>
				  </el-form-item>
				  <el-form-item label="陈鹏元">
				    <el-select v-model="formInline.region" placeholder="陈鹏元">
				      <el-option label="陈鹏元" value="shanghai"></el-option>
				      <el-option label="陈鹏元" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" >查询</el-button>
				  </el-form-item>
				</el-form>
				<el-table
				    :data="tableData"
				    style="width: 100%"
				    >
				    <el-table-column
				      prop="date"
				      label="ID"
				      width="180"
					  align="center">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="180"
					  align="center">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
					  align="center">
				    </el-table-column>
					<el-table-column
					  prop="operation"
					  label="操作"
					  align="center">
					  <el-button type="primary" icon="el-icon-edit" circle></el-button>
					  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
					  <el-button type="danger" icon="el-icon-delete" circle></el-button>
					</el-table-column>
				  </el-table>
			</el-main>
		  </el-container>
		</el-container>
</template>

<script>
	  export default {
	    data() {
	      return {
	        // tabPosition: 'left',
			  formInline: {
			            user: '',
			            region: ''
			          },
					   tableData: [{
					            date: '1',
					            name: '陈鹏元',
					            address: '四川师范大学',
					          }, {
					            date: '2',
					            name: '陈鹏元',
					            address: '四川师范大学'
					          }, {
					            date: '3',
					            name: '陈鹏元',
					            address: '四川师范大学',
					          }, {
					            date: '4',
					            name: '陈鹏元',
					            address: '四川师范大学'
					          }]
	      };
	    }
	  };
</script>

<style>
</style>
