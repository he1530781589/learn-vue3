<template>
  <div class="banner">
    <button @click="bannerBtnClick">bannerEvent</button>
  </div>
</template>

<script>
import eventBus from './utils/event-bus'
export default {
  methods: {
    bannerBtnClick() {
      // 发出事件
      eventBus.emit("bannerEvent", "kobo", "18", 1.8)
    }
  }
}
</script>

<style scoped>
</style>