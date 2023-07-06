<template>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
  <h2>HomeBanner Message: {{ message }}</h2>
</template>

<script>
export default {
  inject: ["name", "age", "message"]
}
</script>

<style scoped>
</style>