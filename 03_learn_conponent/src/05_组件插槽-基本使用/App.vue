<template>
  <div class="app">
    <!-- 1.内容是按钮 -->
    <show-message title="按钮">
      <button>按钮</button>
    </show-message>

    <!-- 2.内容是超链接 -->
    <show-message title="超链接">
      <a href="http://www.baidu.com" target="_blank"> 百度一下</a>
    </show-message>

    <!-- 3.内容是图片 -->
    <show-message title="图片">
      <img src="@/assets/logo.png" alt="">
    </show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
export default {
  components: {
    ShowMessage
  }
}
</script>

<style scoped>
</style>