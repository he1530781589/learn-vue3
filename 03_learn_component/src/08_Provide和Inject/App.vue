<template>
  <div class="app">
    <home></home>
    <h2>App Message: {{ message }}</h2>
    <input type="text" v-model="message">
  </div>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: "Hello App"
    }
  },
  provide() {
    return {
      name: "hemin",
      age: 18,
      // 默认传递的数据不能响应式, 使用 computed() 函数进行包裹使其响应式
      message: computed(() => this.message)
    }
  }
}
</script>

<style scoped>
</style>