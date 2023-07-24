<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>Double count: {{ counterStore.doubleCount }}</h2>
    <h2>Double count add one: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>My Friend: {{ counterStore.getFriendById(100) }}</h2>
    <h2>My Friend: {{ counterStore.getFriendById(101) }}</h2>
    <h2>message: {{ counterStore.showMessage }}</h2>
    <button @click="counterStore.increment">increment</button>
    <button @click="counterStore.incrementNum(10)">increment 10</button>
  </div>
</template>

<script setup>
  import useCounter from '../store/counter'

  const counterStore = useCounter()

</script>

<style scoped>
</style>