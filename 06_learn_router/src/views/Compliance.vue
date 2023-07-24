<template>
  <div class="home wrapper">
    <h2>合规服务</h2>
    <div class="nav">
      <router-link class="nav-item" to="/home">首页</router-link>
      <router-link class="nav-item" to="/compliance/active">动态速递</router-link>
      <router-link class="nav-item" to="/compliance/active2">我的清单</router-link>
      <router-link class="nav-item" to="/compliance/active3">法律条款</router-link>
      <router-link class="nav-item" to="/compliance/active4">合规评价</router-link>
      <router-link class="nav-item" to="/compliance/active5">制度合规</router-link>
      <router-link class="nav-item" to="/compliance/active1">知识库</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script setup>
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-item {
  width: 90px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: gray;
  color: #fff;
  text-align: center;
  text-decoration: none;
}
</style>