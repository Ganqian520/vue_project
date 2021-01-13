<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="form.author"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
      标题图片
      <el-upload :on-success="geturl"
  action="http://localhost:8080/famousteacher/uploadImg"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
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
        img:[]
      }
    },
    methods: {
        geturl(response, file, fileList) {
           // console.log(response);//打印服务器返回的url
            this.img=response

        },
          handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onSubmit() {
        
       return  this.axios.post('http://localhost:8080/famousteacher/submitFamousteacherArticlemsg',{
             "title":this.form.name,
              "autor":this.form.author,
               "content":this.form.desc,
              "imgurl":this.img
        }).then(res=>{
          console.log(res.data)
          if(res.data.status==200) {
            alert('提交成功');
            this.$router.push('/famouseteacheraudit')
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