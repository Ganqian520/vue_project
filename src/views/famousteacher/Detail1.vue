<template>
<div>
        <div style="min-height:400px;text-align:left;background:white"> 
         <p v-html="content"></p>   
      </div>  
</div>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
        return{
            datalist:[],
            contentId:localStorage.contentId ,
            content:'',
        
        }
    },
    methods:{           
    },
    mounted() {
        console.log(this.contentId)
		return this.axios.post('http://127.0.0.1:8080/famousteacher/getauditmsg') //当页面加载时,返回
        .then(ret => {
        //    console.log(ret.data)
           this.datalist = ret.data
            for(let i=0;i<this.datalist.length;i++){
                if(this.datalist[i].id==this.contentId){
                    this.content = this.datalist[i].content
                   
                }
            }
            // console.log(this.showHtml(this.content))
           // this.datalist = ret.data()
              
           // console.log(this.content);
		})
		}
}
</script>