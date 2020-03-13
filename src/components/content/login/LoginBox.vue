<template>
  <div class="login-box">
    <!-- 头像块 -->
    <div class="avatar-box">
      <img src="../../../assets/img/logo.png" alt="捷普电子公司logo">
    </div>
    <!-- 表单块 -->
    <el-form :model='loginForm' :rules='rules' ref='loginFormRef' label-width="0px" class="login-form">
      <el-form-item prop='username'>
        <el-input v-model='loginForm.username' prefix-icon='iconfont icon-dengluyonghu'></el-input>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input v-model='loginForm.password' prefix-icon='iconfont icon-mima'></el-input>
      </el-form-item>
      <el-form-item class="btn-block">
        <el-button type="primary" @click="login('loginFormRef')">登录</el-button>
        <el-button type="info" @click="resetLoginForm('loginFormRef')">重置</el-button>
      </el-form-item>
      <div class="link-block">
        <el-link type="danger" :underline='false'>忘记密码?</el-link>
      </div>
      
    </el-form>
  </div>
</template>
<script>
import request from '../../../network/request'
export default {
  name: 'LoginBox',
  data() {
    return {
      loginForm:{
        username: '',
        password: ''
      },
      rules:{
        username:[
          { required: true, message: '账号不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true,message: '密码不能为空',trigger: 'blur'},
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    //表单清空
    resetLoginForm (formName){
      this.$refs[formName].resetFields();
      // console.log(this);
    },
    //登录校验，并发送请求
    login(formName) {
      this.$refs[formName].validate(result =>{
        if(!result) {
          return;
        }else{
          this.$router.push('/home');
        }
        // request({
        //   url: '',
        // }).then(res => {
        //   this.$message.success('登录成功！');
        //   /**
        //    * 将登陆成功后的token，保存在客户端的sessionStorage中
        //    * -token只在网页打开后生效，访问其他页面时必须是登陆后的
        //    **/
        //   window.sessionStorage.setItem("token",res.data.token);
        //   //跳转至后台主页
        //   this.$router.push('/home');
        // }).catch(err =>{
        //   this.$message.error('登录失败！');
        // })
      })
    }
  }
}
</script>
<style scoped>
  .login-box{
    height: 310px;
    width: 450px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .avatar-box{
    height: 120px;
    width: 120px;
    background-color:#eee; 
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10 #ddd; 
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .avatar-box>img{
    width: 100%;
    height: 90%;
    border-radius: 50%;
    background-color: #eee;
  }
  .login-form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .btn-block{
    display: flex;
    justify-content: flex-end;
  }
  .link-block{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  
</style>