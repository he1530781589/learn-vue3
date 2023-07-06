<template>
  <div class="app">
    <h2>计数器: {{ count }}</h2>
    <add-counter @add="addBtnClick"/>
    <sub-counter @sub="subBtnClick"/>
  </div>
</template>

<script>
import AddCounter from './AddCounter.vue';
import SubCounter from './SubCounter.vue';
export default {
  components: {
    AddCounter,
    SubCounter
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addBtnClick(num) {
      this.count += num
    },
    subBtnClick(num) {
      this.count -= num
    },
  }
}
</script>

<style scoped>
</style>