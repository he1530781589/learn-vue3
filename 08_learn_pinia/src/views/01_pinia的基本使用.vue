<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>count ref: {{ count }}</h2>
    <button @click="incrementCount">+1</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useCounter from '../store/counter'

  const counterStore = useCounter()

  // 通过 storeToRefs 结构出响应式数据, 也可以 vue 的用 toRefs
  const { count } = storeToRefs(counterStore)

  function incrementCount() {
    counterStore.count++
  }

</script>

<style scoped>
</style>