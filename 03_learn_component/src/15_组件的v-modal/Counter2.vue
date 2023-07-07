<template>
  <div class="counter">
    <h2>Counter: {{ counter }}</h2>
    <button @click="changeCounter">Update Counter</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:counter"],
  methods: {
    changeCounter() {
      this.$emit("update:counter", "999")
    }
  }
}
</script>

<style scoped>
</style>