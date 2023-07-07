<template>
  <div class="app">
    <home></home>
    <category></category>
    <about></about>
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