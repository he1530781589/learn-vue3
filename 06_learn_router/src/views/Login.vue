<template>
  <div class="login">
    <h2>登录页面</h2>
    <div class="content">
      <label for="username">
        用户姓名: <input id="username" v-model="username">
      </label>
      <label for="password">
        用户姓名: <input id="password" v-model="password">
      </label>
    </div>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script setup>
  import router from '@/router';
  import { ref } from 'vue'
  const username = ref("")
  const password = ref("")

  function loginClick() {
    console.log("login: ", username, password)
    localStorage.setItem("token", "loginToken")
    router.push("/order")
  }
</script>
<style scoped>
</style>