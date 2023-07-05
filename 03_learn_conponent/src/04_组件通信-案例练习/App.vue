<template>
  <div class="app">
    <tab-control 
      :titles="['衣服', '裤子', '皮鞋']"
      @tab-item-click="tabItemClick"/>
    <h2>{{ pageContents[currentIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  data() {
    return {
      pageContents: ["衣服列表", "裤子列表", "鞋子列表"],
      currentIndex: 0
    }
  },
  components: {
    TabControl
  }, 
  methods: {
    tabItemClick(tabIndex) {
      this.currentIndex = tabIndex
    }
  }
}
</script>

<style scoped>
</style>