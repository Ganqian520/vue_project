<template>
<div>
        <div style="min-height:400px;text-align:left;"> 
            {{this.content}}
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
    // beforeRouteEnter (to, from, next) {
    //     // ...
    //     if(from.path=='/famouseteacheraudit'){
    //         this.api= '/auditsetstatu_1'
    //         next()
    //     }else{
    //         this.api='/getmsg'
    //         next()
    //     }
    // },
    mounted() {
        console.log(this.contentId)
		return this.axios.post('http://localhost:8080/famousteacher/getauditmsg') //当页面加载时,返回
        .then(ret => {
           console.log(ret.data)
           this.datalist = ret.data
            for(let i=0;i<this.datalist.length;i++){
                if(this.datalist[i].id==this.contentId){
                    this.content = this.datalist[i].content
                }
            }
           // this.datalist = ret.data
              
           // console.log(this.content);
		})
		}
}
</script>