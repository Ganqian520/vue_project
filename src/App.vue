<template>
  <div id="app"> 
	 <router-view v-if="isShow" />
	<el-container v-if="!isShow">
	  <el-header >
		 <topbar></topbar>
	  </el-header>
	  <el-main style="padding:20px 200px;">
		   <router-view/>
	  </el-main>
	  <el-footer>
		  <footbar></footbar>
	  </el-footer>
	</el-container>
  </div>
</template>

<script>
	import topbar from './components/Topbar.vue'
	import footbar from './components/Footbar.vue'
export default {
  name: 'app', 
  data(){
	  return{
		  isShow:false
	  }
  },
  components:{
	  topbar,
	  footbar
  },
	watch: {
	  '$route':'getPath'
	},
	methods: {
	  getPath(){
		  if(this.$route.path==='/login'||this.$route.path==='/register'||this.$route.path==='/admin'||this.$route.path==='/usermanage'){
			  this.isShow=true
		  }else{
			  this.isShow=false
		  }
	    
	  }
	},
	mounted() {
<<<<<<< HEAD
		if(this.$route.path==='/login'||this.$route.path==='/register'||this.$route.path==='/admin'||this.$route.path==='/usermanage'||this.$route.path==='/powermanage'){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
			this.isShow=true
=======
		if(this.$route.path==='/login'||this.$route.path==='/register'||this.$route.path==='/admin'||this.$route.path==='/usermanage'){
					  this.isShow=true
>>>>>>> parent of c72b53a... 改动
=======
					  this.isShow=true
>>>>>>> parent of 28027cf... 123
=======
					  this.isShow=true
>>>>>>> parent of 28027cf... 123
=======
					  this.isShow=true
>>>>>>> parent of 28027cf... 123
		}else{
					  this.isShow=false
		}
	}
  
}
</script>

<style>
	
	 .el-header, .el-footer {
	    background-color: white;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	   .el-main {
	      background-color: #E9EEF3;
	      color: #333;
	      text-align: center;
	    }
</style>
