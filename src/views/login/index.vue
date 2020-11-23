<template>
  <div class="login-container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="@/assets/logo.jpg" alt="">
      </div>
      <!-- 登陆表单区域 -->
      <el-form ref="loginFormRef" :rules="loginFormRules" :model="loginForm" label-width="0px" class="login_form">
        <!-- 登陆提示 -->
        <div class="login_remind">
          <div class="text"><strong>账号登陆</strong></div>
          <div class="line1"></div>
          <div class="line"></div>
        </div>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
      <!-- 注册和找回密码链接 -->
      <div class="fr_link">
        <router-link to="/register"><el-link type="primary">注册新用户</el-link></router-link>
        <router-link to="/findpwd" class="f_link"><el-link type="primary">忘记密码?</el-link></router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginIndex",
  data() {
    return {
      // 这是登陆表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登陆账号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度应在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度应在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login:function () {
      return this.axios.post('http://localhost:8080/login/check',{
        
          "username":this.loginForm.username,
          "pwd":this.loginForm.password
        
      })
        .then(ret => {
         console.log(ret.data);
         if(ret.data.status=="200") {
           alert('登录成功');
           this.$router.push('/index');
           localStorage.role = ret.data.context.roleList.length
           localStorage.token= ret.data.context.token
         }
        })
    },
    
  }
};
</script>

<style lang="less" scoped>
.login_box {
  width: 450px;
  height: 600px;
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
    left: 50%;
    transform: translate(-50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .fr_link {
    position: absolute;
    bottom: 15%;
    right: 18%;
    
    .f_link{
      position: relative;
      left: 22%;
    }
  }
}

.login_form{
  position: absolute;
  bottom: 25%;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}

.el-button{
  width: 100%;
}

.line{
  border-bottom: 1px solid rgba(128, 128, 128, 0.377);
  margin: 0 0 30px 0;
}

.line1{
  position: absolute;
  border-bottom: 2px solid#409EFF;
  width: 150px;
  left: 50%;
  transform: translate(-50%);
}

.text{
  font-size: 20px;
  position: relative;
  color: #2a91f8;
  left: 40%;
  bottom: 10px;
}

a {
  text-decoration: none;
}

</style>