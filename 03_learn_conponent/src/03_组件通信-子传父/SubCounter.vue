<template>
  <div class="sub">
    <button @click="btnClick(1)">-1</button>
    <button @click="btnClick(5)">-5</button>
    <button @click="btnClick(10)">-10</button>
  </div>
</template>

<script>
export default {
  // 使用emits指定所有自定义事件，可以提高组件的提示和可读性
  emits: ["sub"],
  methods: {
    btnClick(count) {
      this.$emit("sub", count)
    }
  }
}
</script>

<style scoped>
</style>