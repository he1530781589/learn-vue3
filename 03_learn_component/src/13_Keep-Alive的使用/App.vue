<template>
  <div class="app">
    <div class="tab">
      <button v-for="item in tabs" @click="currentTab = item">
        {{ item }}
      </button>
    </div>

    <!-- keep-alive 
      用于缓存组件，提高性能和保留组件状态 
      include 属性用于指定要缓存的组件, 注意: 中间不能有空格
    -->
    <div class="view">
      <keep-alive include="home,about">
        <component :is="currentTab"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import Category from './views/Category.vue';

export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ["home", "category", "about"],
      currentTab: "home"
    }
  },
  methods: {
    categoryClick(message) {
      console.log(message)
    }
  }
}
</script>

<style scoped>
</style>