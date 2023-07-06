<template>
  <div class="app">
    <home></home>
    <h2>App Message: {{ message }}</h2>
    <button @click="isShowCategory = !isShowCategory">创建/销毁 Category 组件</button>
    <category v-if="isShowCategory"/>
  </div>
</template>

<script>
import eventBus from './utils/event-bus'
import Home from './Home.vue';
import Category from './Category.vue';
export default {
  components: {
    Home,
    Category
  },
  data() {
    return {
      message: "Hello App",
      isShowCategory: true
    }
  },
  created() {
    eventBus.on("bannerEvent", (name, age, height) => {
      console.log("App组件捕获到bannerEvent")
      this.message = `姓名: ${name}, 年龄: ${age}, 身高: ${height}`
    })
  }
}
</script>

<style scoped>
</style>