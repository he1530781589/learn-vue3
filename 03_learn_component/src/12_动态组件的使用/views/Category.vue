<template>
  <div class="category">
    <h2>Category</h2>
    <button @click="categoryClick">Category Click</button>
  </div>
</template>

<script>
export default {
  name: "category",
  methods: {
    categoryClick() {
      this.$emit("categoryClick", "Category Click")
    }
  }
}
</script>

<style scoped>
</style>