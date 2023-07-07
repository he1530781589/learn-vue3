<template>
  <div class="about">
    <h2>About</h2>
    <p>message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "about",
  props: {
    message: {
      type: String,
      default: "default message"
    }
  }
}
</script>

<style scoped>
</style>