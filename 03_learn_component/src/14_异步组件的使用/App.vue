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
// import Home from './views/Home.vue';
import { defineAsyncComponent } from 'vue';
import About from './views/About.vue';
import Category from './views/Category.vue';

// 异步组件在打包后会生成单独的 js 文件
const AsyncHome = defineAsyncComponent(() => import("./views/Home.vue"))

export default {
  components: {
    Home: AsyncHome,
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