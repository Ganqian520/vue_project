<template>
	<div id="box" >
		<div id="content" v-for="data in datalist" :key="data.id"  @click="enterDetail(data.id)" >
			<div>
			<img :src="data.imgurl" class="l" />
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;" >{{data.title}}</span>
				<i class="el-icon-time r">{{data.time}}</i>
			</div>
			
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<i class="el-icon-user-solid" style="font-size: 18px;"></i>
				<span style="margin:0 10px;">{{data.autor}}</span>
				<el-button @click="pass(data.id)">通过</el-button>
			</div>
		</div>
		
		
	
	
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				datalist:[]
			}
		},
		methods:{
			enterDetail(id){
				localStorage.contentId = id
				this.$router.push('/detail1')
			},
			pass(id){
				return this.axios.post('http://localhost:8080/famousteacher/auditsetstatu_1',{
					'id':id
				}) //当页面加载时,返回
        			.then(ret => {
						if(ret.data.status==200){
							alert('审核通过')
							this.$router.go(0)
						}
					
				})
			}	
		},
		mounted() {
		return this.axios.post('http://localhost:8080/famousteacher/getauditmsg') //当页面加载时,返回
        .then(ret => {
			this.datalist=ret.data;
			console.log(ret.data);
		})
		}
	}
</script>

<style scoped lang="less">
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
