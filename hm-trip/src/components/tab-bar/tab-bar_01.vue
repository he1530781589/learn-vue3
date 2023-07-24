<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #eee;

  .tab-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #646566;
    font-size: 12px;


    flex: 1;

    img {
      width: 36px;
    }

    .text {
      margin-top: 2px
    }
  }
}
</style>
