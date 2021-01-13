<template>
<div style="background:white">
        <div style="min-height:400px;text-align:left;"> 
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
            api:'/getmsg'
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
		return this.axios.post(`http://127.0.0.1:8080/famousteacher${this.api}`) //当页面加载时,返回
        .then(ret => {
           console.log(ret.data)
            this.datalist = ret.data
            for(let i=0;i<this.datalist.length;i++){
                if(this.datalist[i].id==this.contentId){
                    this.content = this.datalist[i].content
                }
            }     
           // console.log(this.content);
		})
		}
}
</script>
<style scoped>

</style>