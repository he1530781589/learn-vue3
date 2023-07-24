<template>
  <div class="home wrapper">
    <h2>Home Page</h2>
    <div class="control">
      <button @click="toUserPage">用户信息(path params)</button>
      <button @click="toUserPageQuery">用户信息(query)</button>
      <button @click="login">登录</button>
      <button @click="logout">退出登录</button>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/order">我的订单</router-link>
      <router-link class="nav-item" to="/law/legalRegulations">法律法规</router-link>
      <router-link class="nav-item" to="/law/nationalStandards">国家标准</router-link>
      <router-link class="nav-item" to="/law/industryStandards">行业标准</router-link>
      <router-link class="nav-item" to="/law">地方标准</router-link>
      <router-link class="nav-item" to="/law">团体标准</router-link>
      <router-link class="nav-item" to="/law">综合查询</router-link>
      <router-link class="nav-item" to="/law">国际规范</router-link>
      <router-link class="nav-item" to="/compliance">合规服务</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const toUserPage =  () => {
  const userId = 123456
  // 通过代码进行路由
  // router.push("/user/123456")
  // router.replace({
  //   path: `/user/${userId}`
  // })
  router.push({
    path: `/user/${userId}`
  })
}

const toUserPageQuery = () => {
  router.push({
    path: `/userQuery`,
    query: {
      userId: 123456,
      age: 18
    }
  })
}

function login() {
  router.push("/login")
}

function logout() {
  localStorage.removeItem("token")
  router.push("/home")
}
</script>
<style lang="less" scoped>
.control {
  margin: 20px;

  button {
    margin: 0 10px;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-item {
  width: 90px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: orange;
  color: #fff;
  text-align: center;
  text-decoration: none;
}
</style>