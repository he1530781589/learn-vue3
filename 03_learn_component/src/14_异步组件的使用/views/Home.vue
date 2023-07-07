<template>
  <div class="home">
    <h2>Home</h2>
  </div>
</template>

<script>
export default {
  name: "home",
  unmounted() {
    console.log("Home 组件销毁")
  },
  // keep-alive关联的组件具有activated和deactivated生命周期，
  // 用于监听组件的激活和休眠状态
  activated() {
    console.log("home activated")
  },
  deactivated() {
    console.log("home  deactivated")
  }
  
}
</script>

<style scoped>
</style>