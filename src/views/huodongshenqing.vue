<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item label="地址">
    <el-input type="textarea" v-model="form.address"></el-input>
  </el-form-item>
  
  <el-form-item label="开始时间">
    <el-input type="date" v-model="form.start"></el-input>
  </el-form-item>
    <el-form-item label="结束时间">
    <el-input type="date" v-model="form.end"></el-input>
  </el-form-item>

  <el-form-item>
      标题图片
      <el-upload :on-success="geturl"
  action="http://127.0.0.1:8080/famousteacher/uploadImg"
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
          desc: '',
          people:'',
          start:'',
          end:'',
          address:''
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
        
       return  this.axios.post('http://127.0.0.1:8080/Activity/submitActivity',{
             "title":this.form.name,
              "organizerusername":localStorage.username,
               "content":this.form.desc,
              "titlepictureurl":this.img,
              "maxpeople":'',
              "starttime":this.form.start,
            "endtime":this.form.end,
            "address":this.form.address
        }).then(res=>{
          console.log(res.data)
          if(res.data.status==200) {
            alert('提交成功');
             this.$router.push('/famousteacher')
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