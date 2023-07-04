<template>
  <h2>{{ title }}</h2>
  <h2>当前计数: {{ counter }}</h2>
  <button @click="decrement">+1</button>
  <button @click="increment">-1</button>

  <!-- 组件 -->
  <product-item></product-item>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      title: "这是一个标题",
      counter: 0
    }
  },
  methods: {
    decrement() {
      this.counter++
    },
    increment() {
      this.counter--
    }
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>