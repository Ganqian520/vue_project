<template>
<div>
        <div> 
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
            contentId:localStorage.contentId -1,
            content:''
        }
    },
    mounted() {
		return this.axios.post('http://localhost:8080/famousteacher/getmsg') //当页面加载时,返回
        .then(ret => {
            this.datalist = ret.data
            this.content = this.datalist[this.contentId].content
            console.log(this.content)
		})
		}
}
</script>