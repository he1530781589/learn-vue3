<template>
  <div class="banner">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Banner"
    }
  },
  methods: {
    bannerClick() {
      console.log("bannerClick")
    }
  }
}
</script>

<style scoped>
</style>