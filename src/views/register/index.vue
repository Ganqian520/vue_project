<template>
  <div class="register-container">
    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="@/assets/logo.jpg" alt="">
      </div>
      <!-- 注册表单区域 -->
      <el-form ref="registerFormRef" :rules="registerFormRules" :model="registerForm" label-width="0px" class="register_form">
        <!-- 用户名 -->
        <el-form-item prop="username" :required="true">
          <el-input v-model="registerForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pwd">
          <el-input v-model="registerForm.pwd" prefix-icon="el-icon-lock" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <!-- 重复密码 -->
        <el-form-item prop="repwd">
          <el-input v-model="registerForm.repwd" prefix-icon="el-icon-lock" placeholder="请再次输入密码" type="password"></el-input>
        </el-form-item>
        <!-- 昵称 -->
        <el-form-item prop="nickname">
          <el-input v-model="registerForm.nickname" prefix-icon="el-icon-user" placeholder="请输入昵称"></el-input>
        </el-form-item>        
        <!-- 手机号码 -->
        <el-form-item prop="phone">
          <el-input v-model="registerForm.phone" prefix-icon="el-icon-phone" placeholder="请输入手机号"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" ></el-input>
        </el-form-item>
        <!-- 家长姓名 -->
        <el-form-item prop="parentname">
          <el-input v-model="registerForm.parentname" prefix-icon="el-icon-s-check" placeholder="请输入家长姓名"></el-input>
        </el-form-item>        
        <!-- 学校 -->
        <el-form-item prop="school">
          <el-input v-model="registerForm.school" prefix-icon="el-icon-school" placeholder="请输入学校"></el-input>
        </el-form-item>  
        <!-- 按钮区域以及注册页面 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">注册</el-button>
          <router-link to="/login" class="f_link"><el-link type="primary">已有账号，立即登陆</el-link></router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "RegisterIndex",
  data() {
    return {
      // 这是注册表单的数据绑定对象
      registerForm: {
        username: '',
        nickname: '',
        phone: '',
        pwd: '',
        school: '',
        parentname: '',
        repwd: ''
      },
      // 这是表单的验证规则对象
      registerFormRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            validator: function(rule, value, callback) {
              //校验中文的正则：/^[\u4e00-\u9fa5]{0,}$/
              if (value) {
                if (/[\u4E00-\u9FA5]/g.test(value)) {
                    callback(new Error('不能有中文!'))
                }else {
                    callback()
                }
              }
            },
            trigger: "blur"
          },
          { min: 3, max: 10, message: '长度应在 3 到 10 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度应在 6 到 10 个字符', trigger: 'blur' }
        ],
        repwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度应在 6 到 10 个字符', trigger: 'blur' }
        ],
        nickname: [
          { required: false, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度应在 2 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度应为 11 个数字', trigger: 'blur' }
        ],
        school: [
          { required: false, message: '请输入学校', trigger: 'blur' },
          {
            validator: function(rule, value, callback) {
              //校验中文的正则：/^[\u4e00-\u9fa5]{0,}$/
              if (/^[\u4e00-\u9fa5]+$/.test(value) == false) {
                callback(new Error("请只输入中文！"));
              } else {
                //校验通过
                callback();
              }
            },
            trigger: "blur"
          },
          { min: 2, max: 16, message: '长度应在 2 到 16 个字符', trigger: 'blur' }
        ],
        parentname: [
          { required: false, message: '请输入家长姓名', trigger: 'blur' },
          {
            validator: function(rule, value, callback) {
              //校验中文的正则：/^[\u4e00-\u9fa5]{0,}$/
              if (/^[\u4e00-\u9fa5]+$/.test(value) == false) {
                callback(new Error("请只输入中文！"));
              } else {
                //校验通过
                callback();
              }
            },
            trigger: "blur"
          },
          { min: 2, max: 16, message: '长度应在 2 到 16 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {

    login() {
        return this.axios.get('http://localhost:8080/api/user/register',{
        params:{
          username:this.registerForm.username,
          nickname:this.registerForm.nickname,
          phone:this.registerForm.phone,
          pwd:this.registerForm.pwd,
          school:this.registerForm.school,
          parentname:this.registerForm.parentname
        }
      })
        .then(ret => {
          if(ret.data==0) {
            alert('用户名存在,请重新输入');
            setTimeout(() => {
               
               this.$router.go(0);//当前路由刷新
            }, 1000);
            
          }
          else {
            alert('注册成功');
          }
        })
    }
  }
};
</script>

<style lang="less" scoped>
.register_box {
  width: 450px;
  height: 700px;
  background-color: rgba(128, 128, 128, 0.192);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 120px;
    width: 120px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 5px;
    position: absolute;
    top: -7%;
    left: 50%;
    transform: translate(-50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .f_link{
      position: relative;
      left: 30%;
  }
}

.register_form{
  position: absolute;
  bottom: 7%;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}

.el-button{
  width: 100%;
}


a {
  text-decoration: none;
}

</style>