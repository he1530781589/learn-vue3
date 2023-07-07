<template>
  <div class="app">

    <counter v-model="appCounter"></counter>
    <!-- v-model 相当于 :modelValue 和 @update:modelValue 的结合 -->
    <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter>

    <!-- 自定义参数 -->
    <Counter2 v-model:counter="appCounter2"></Counter2>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  components: {
    Counter,
    Counter2
  },
  data() {
    return {
      appCounter: 100,
      appCounter2: 99
    }
  }
}
</script>

<style scoped>
</style>