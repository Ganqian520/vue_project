<template>
<div>
	<h1 class="biaoti">少先队员统一服务管理系统</h1>
</div>
		
	 
</template>

<script>
	import swipe from '../../components/swiper.vue'
export default {
  name: "Index",
  data() {
    return{
		
    }
  },
  components:{
	  swipe
  },
}
</script>

<style  scoped>
	.biaoti {
		margin: 0 auto;
		margin-top: 200px;
		font-size: 40px;
		}
	.asideSpan1{
		position: absolute;left: 0;top: 0px;line-height: 20px;
	}
	.asideSpan2{
		position: absolute;right: 0;top: 0px;line-height: 20px;
	}
	.aside{
		
		/* border: 1px solid black; */
		width: 350px;
		height: 500px;
		margin-top: 30px;
		box-shadow: 5px 5px 2px #888888;
		background-color: #afd9d2;
	}
	/* .block{
		border: 1px solid red;
	} */
	/* .bblock{
		border: 1px solid red;
	} */
	.clear:after{
		content: ' ';
		display: block;
		clear: both;
	}
	.clear{
	        *zoom: 1;
	    }
	.l{
		float: left;
	}
	.clear .l .activecontent{
		box-shadow: 5px 5px 2px #888888;
	}
/* 	.clear .l .activecontent p{
		font-size: large;
		
	} */
	.r{
		float: right;
	}
	.active,.article{
		text-align: left;
		height: 100px;
		line-height: 100px;
		margin-left: 50px;
	}
	.activecontent{
		height: 300px;
		width: 200px;
		margin: 20px;
		/* position: absolute; */	
		background-color: #afd9d2;
		
	}
	ul{
		list-style: none;
	}
	.articlecontent{
		margin: 20px;
		width: 600px;height: 100px;  
		/* border: 1px solid black; */
		background-color: #AFD9D2;
		box-shadow: 5px 5px 2px #888888;
	}
	#box1{
		border-bottom: 4px dashed #afd9d2; 
		/* border-top: 2px dotted #32F9F9; */
		/*box-shadow: 5px 5px 2px #888888; */
		/* outline-color: #AFF2FF;
		outline-style: groove; */
	}
	#box2{
		/* border: 1px solid red; */
	}
	
	.company{
		overflow: hidden;
	}
	.company{
	    width: 1000px;
		height: 200px;
		background-color: #0DD6C7;
		box-shadow: 5px 5px 2px #888888;
		border-radius: 10%;
		margin-left: 10%;
	    
	}
	.company_introduce,.company_name{
		display: block;
	}
	.company_name{
		border-bottom: 2px solid white;
	}
	/*定义一个名字为lefteaseinAnimate动画，实现从页面的左边淡入页面效果*/
	@keyframes lefteaseinAnimate{
	    0%{ transform: translateX(-2000px); opacity: 0;}   /*在0%时设置文字在想X轴-2000px位移处（左边），透明度为0，也就是看不见文字*/
	    100%{ transform: translateX(0px); opacity: 1;}         /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
	}
	@-webkit-keyframes lefteaseinAnimate{
	    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
	}
	@-o-keyframes lefteaseinAnimate{
	    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
	}
	@-ms-keyframes lefteaseinAnimate{
	    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
	}
	@-moz-keyframes lefteaseinAnimate{
	    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
	}
	.company_name{
	    animation: lefteaseinAnimate 1s ease 1;    /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
	    -webkit-animation: lefteaseinAnimate 1s ease 1;
	    -ms-animation: lefteaseinAnimate 1s ease 1;
	    -o-animation: lefteaseinAnimate 1s ease 1;
	    -moz-animation: lefteaseinAnimate 1s ease 1;
	    
	    /*规定动画的最后状态为结束状态*/
	    animation-fill-mode:forwards;
	    -webkit-animation-fill-mode: forwards;  
	      -o-animation-fill-mode: forwards; 
	      -ms-animation-fill-mode: forwards;   
	      -moz-animation-fill-mode: forwards; 
	}
	/*定义一个名字为righteaseinAnimate动画，实现从页面的右边淡入页面效果*/
	@keyframes righteaseinAnimate{
	    0%{ transform: translateX(2000px); opacity: 0;}   /*在0%时设置文字在想X轴2000px位移处（右边），透明度为0，也就是看不见文字*/
	    100%{ transform: translateX(0px); opacity: 1;}      /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
	}
	@-webkit-keyframes righteaseinAnimate{
	    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}
	}
	@-o-keyframes righteaseinAnimate{
	    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}
	}
	@-ms-keyframes righteaseinAnimate{
	    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}
	}
	@-moz-keyframes righteaseinAnimate{
	    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
	    100%{ -webkit-transform: translateX(0px); opacity: 1;}
	}
	.company_introduce{
	    animation: righteaseinAnimate 2s ease 1;    /*调用已定义好的动画righteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
	    -webkit-animation: righteaseinAnimate 2s ease 1;
	    -moz-animation: righteaseinAnimate 2s ease 1;
	    -ms-animation: righteaseinAnimate 2s ease 1;
	    -o-animation: righteaseinAnimate 2s ease 1;
	    
	    /*规定动画的最后状态为结束状态*/
	    animation-fill-mode:forwards;
	    -webkit-animation-fill-mode: forwards;  
	      -o-animation-fill-mode: forwards; 
	      -ms-animation-fill-mode: forwards;   
	      -moz-animation-fill-mode: forwards; 
	}
</style>