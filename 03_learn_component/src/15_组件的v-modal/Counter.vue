<template>
  <div class="counter">
    <h2>Counter: {{ modelValue }}</h2>
    <button @click="changeCounter">Update Counter</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  methods: {
    changeCounter() {
      this.$emit("update:modelValue", "999")
    }
  }
}
</script>

<style scoped>
</style>