<template>
<!-- guangbo -->
	<div id="box" >
		<div id="content" v-for="data in datalist" :key="data.id"  >
			<div>
			<img :src="data.imgurl" class="l" />
			
			</div>
			<div class="clear">
				<span class="l" style="font-size: 18px;font-weight: bold;">{{data.title}}</span>
				
			</div>
			
			<div style="position: absolute;top: 140px;text-align: left;left: 190px;color: #999999;">
				<audio :src="data.broadcasturl"  controls>	</audio>
				<span style="margin:0 10px;">{{data.autor}}</span>
				
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
				this.$router.push('/detail')
			}
		},
		mounted() {
			// this.axios.defaults.common["token"]=localstorage.token;
		return this.axios.post('http://127.0.0.1:8080/broadcast/showAllMsg',
		{
			// headers:{
			// 	'token':localStorage.token
			// 	},
			// data:{
			// 	'token':localStorage.token
			// },
			// 'token':localStorage.token	
			
		}
		) //当页面加载时,返回
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
