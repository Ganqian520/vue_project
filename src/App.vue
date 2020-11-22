<template>
  <div id="app">    
	<el-container>
	  <el-header>
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
  components:{
	  topbar,
	  footbar
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
