<template>
  <div class="app">
    <h2>{{ info.counter }}</h2>
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let counter = ref(12)
    const info = {
      counter
    }
    return {
      info
    }
  }
}
</script>

<style scoped>
</style>
