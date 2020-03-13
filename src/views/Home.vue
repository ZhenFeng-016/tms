<template>
  <div>
    主页
  </div>
</template>
<script>
  export default {
    name: 'Home',
    components: {
    },
    methods: {
      loginOut() {
        window.sessionStorage.clear();
        this.$routerrouter.push('/login');
      }
    }
  }
</script>
<style scoped>
</style>