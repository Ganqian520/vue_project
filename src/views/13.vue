<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  
 
  <el-form-item>
      广播图片
  <el-upload :on-success="geturl"
  action="http://127.0.0.1:8080/famousteacher/uploadImg"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<br>
	
	<el-upload :on-success="geturl1"
  action="http://127.0.0.1:8080/famousteacher/uploadImg"
  >
添加广播 <br>

  <i class="el-icon-plus"></i>
</el-upload>
 
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

    </div>
</template>
<script>
  export default {
    data() {
      return {
           dialogImageUrl: '',
        dialogVisible: false,
        form: {
          name: '',
          author:'',
          url:'',
          desc: ''
        },
		img:[],
		audio:[]
      }
    },
    methods: {
        geturl(response, file, fileList) {
           // console.log(response);//打印服务器返回的url
            this.img=response

		},
		geturl1(response, file, fileList) {
           // console.log(response);//打印服务器返回的url
            this.audio=response

        },
          handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onSubmit() {
        
       return  this.axios.post('http://127.0.0.1:8080/broadcast/submitBroadcast',{
             "title":this.form.name,
              "broadcasturl":this.audio,
               
              "imgurl":this.img
        }).then(res=>{
          console.log(res.data)
          if(res.data.status==200) {
			alert('提交成功');
			this.$router.push('/12')
          }
        })
        //  name: '',
        //   author:'',
        //   url:'',
        //   desc: ''
      }
    }
  }
</script>