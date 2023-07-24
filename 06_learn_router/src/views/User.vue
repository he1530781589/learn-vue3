<template>
  <div class="user">
    <!-- 获取传递的参数 -->
    <h2>User {{ $route.params }}</h2>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  // 通过代码获取params
  const route = useRoute()
  console.log(route.params.id)
</script>

<style scoped>
</style>