<template>
  <div class="home">
    <home-nav-bar/>
    <div class="home-banner">
      <img src="@/assets/img/home/banner.webp" alt=""/>
    </div>
    <home-search-box/>
  </div>
</template>

<script setup>
import HomeNavBar from "@/views/home/cnps/home-nav-bar.vue";
import HomeSearchBox from "@/views/home/cnps/home-search-box.vue";
import useHomeStore from "@/stores/modules/home";

// 请求数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()

</script>

<style lang="less" scoped>
.home-banner {
  img {
    width: 100vw;
  }
}
</style>
