<template>
  <div class="about">
    <h2>About</h2>
  </div>
</template>

<script>
export default {
  name: "about",
  unmounted() {
    console.log("About 组件销毁")
  }
}
</script>

<style scoped>
</style>