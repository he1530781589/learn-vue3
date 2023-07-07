<template>
  <div class="app">
    <div class="tab">
      <button v-for="item in tabs" @click="currentTab = item">
        {{ item }}
      </button>
    </div>

    <!-- 动态组件使用 is 属性来指定关联的组件 -->
    <component message="Hello World"
              @categoryClick="categoryClick"
              :is="currentTab"/>
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