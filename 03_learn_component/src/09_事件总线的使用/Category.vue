<template>
  <h2>Category Message: {{ message }}</h2>
</template>

<script>
import eventBus from './utils/event-bus'
export default {
  data() {
    return {
      message: "Hello App"
    }
  },
  methods: {
    changeMessage(name, age, height) {
      console.log("category组件捕获到bannerEvent")
      this.message = `姓名: ${name}, 年龄: ${age}, 身高: ${height}`
    }
  },
  created() {
    eventBus.on("bannerEvent", this.changeMessage)
  },
  unmounted() {
    console.log("销毁 category bannerEvent ")
    eventBus.off("bannerEvent", this.changeMessage)
  }
}
</script>

<style scoped>
</style>