<template>
  <div class="home wrapper">
    <h2>Law Page</h2>
    <div class="nav">
      <router-link class="nav-item" to="/home">首页</router-link>
      <router-link class="nav-item" to="/law/legalRegulations">法律法规</router-link>
      <router-link class="nav-item" to="/law/industryStandards">国家标准</router-link>
      <router-link class="nav-item" to="/law/nationalStandards">行业标准</router-link>
      <router-link class="nav-item" to="/law/nationalStandards">地方标准</router-link>
      <router-link class="nav-item" to="/law/nationalStandards">团体标准</router-link>
      <router-link class="nav-item" to="/law/nationalStandards">综合查询</router-link>
      <router-link class="nav-item" to="/law/nationalStandards">国际规范</router-link>
      <router-link class="nav-item" to="/compliance">合规服务</router-link>
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
  background-color: skyblue;
  color: #fff;
  text-align: center;
  text-decoration: none;
}
</style>