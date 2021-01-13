<template>
		<el-container>
		  <el-header>
			  <el-page-header  @back="back()" content="">
			  </el-page-header>
			 
		  </el-header>
		  <el-container>
		    
		    <el-main>
				<el-form  class="demo-form-inline" style="text-align: left;">			 
				  <el-form-item>
				    <el-button type="primary" 
>日志管理</el-button>
				  </el-form-item>
				</el-form>
				<el-table
				    :data="tableData"
				    style="width: 100%"
				    >
					<el-table-column
					prop="eventId"
					  label="id"
					  width="180"
					  align="center"
					  
					  >
					  
					</el-table-column>
				    <el-table-column
				     
				      label="时间"
				      width="180"
					  align="center">
					  <template slot-scope="scope" >
					  		{{scope.row.timestmp | formatDateTime}}			 
					</template>
				    </el-table-column>
					 
				    <el-table-column
				     
				      label="用户"
				      width="180"
					  align="center">
					   <template slot-scope="scope" >
					  		{{scope.row.formattedMessage | name}}			 
					</template>
				    </el-table-column>
					 <el-table-column
				      prop="levelString"
				      label="类型"
				      width="180"
					  align="center">
				    </el-table-column>
					 <el-table-column
				      prop="loggerName"
				      label="接口"
				      width="180"
					  align="center">
				    </el-table-column>
					<el-table-column  
					  label="操作"
					
					  align="center">
					  <template slot-scope="scope" >
					  		{{scope.row.formattedMessage | op}}			 
					</template>
					</el-table-column>
				  </el-table>
			</el-main>
		  </el-container>
		  
		 
		  
		 
		</el-container>
</template>

<script>
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
 
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
	import Vue from 'vue'
	 Vue.filter("op",(data)=>{
		 if(data){
			 if(data.includes('尝试登录'))
			 {return(data.substr(-4,4))}
			 else{
				 return data
			 }
		 }
		
		 //return data.slice()
	 })
	 Vue.filter('name',(data)=>{
		 if(data){
			//  http-nio-8080-exec-1
			 if(data.includes('尝试登录'))
			{return data.substr(0,data.length-4)}
			else{
				return 'http-nio-8080-exec-1'
			}
		 }
		 
	 })
	 Vue.filter('formatDateTime',(time)=>{
		 console.log(time)
		 if(time){
			   if (time == null || time === "") {
        return "N/A";
      }
      const date = new Date(time);
      return  formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
		 
	 })
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
     	return this.axios.post('http://127.0.0.1:8080/Logging_event/getloggingMsg') //当页面加载时,返回
        .then(ret => {
			console.log(ret.data);
          this.tableData=ret.data;console.log(this.tableData)
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
				 return this.axios.post('http://127.0.0.1:8080/role/addRole',{
					 
        
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
