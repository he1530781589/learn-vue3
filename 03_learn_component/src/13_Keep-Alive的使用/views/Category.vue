<template>
  <div class="category">
    <h2>Category</h2>
  </div>
</template>

<script>
export default {
  name: "category",
  unmounted() {
    console.log("Category 组件销毁")
  }
}
</script>

<style scoped>
</style>