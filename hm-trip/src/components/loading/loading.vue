<template>
  <div class="loading" v-if="mainStore.showLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);

  .bg {
    width: 85px;
    height: 85px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    img {
      width: 73px;
      height: 73px;
    }
  }
}
</style>
