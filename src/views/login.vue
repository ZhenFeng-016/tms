<template>
  <div class='login-container'>
    <div class="login-box">
      <login-box></login-box>
    </div>
  </div>
</template>
<script>
  import LoginBox from '../components/content/login/LoginBox'
  export default {
    name: 'login',
    components: {
      LoginBox
    }
  }
</script>
<style scoped>
  .login-container{
    height: 100%;
    background-color:#2b4b6b;
  }
  .login-box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>