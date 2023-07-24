<template>
  <div class="user">
    <!-- 获取传递的参数 -->
    <h2>User Query {{ $route.query }}</h2>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  // 通过代码获取query参数
  const route = useRoute()
  console.log(route.query)
</script>

<style scoped>
</style>