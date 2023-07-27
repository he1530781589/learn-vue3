<template>
  <div class="home">
    <home-nav-bar/>
    <div class="home-banner">
      <img src="@/assets/img/home/banner.webp" alt=""/>
    </div>
    <home-search-box/>
    <home-category/>
    <home-content/>
    <div v-if="isShowSearch" class="search-bar">
      <search-bar/>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from "@/views/home/cnps/home-nav-bar.vue";
import HomeSearchBox from "@/views/home/cnps/home-search-box.vue";
import useHomeStore from "@/stores/modules/home";
import HomeCategory from "@/views/home/cnps/home-category.vue";
import HomeContent from "@/views/home/cnps/home-content.vue";
import useScroll from "@/hooks/useScroll";
import {computed, watch} from "vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

// 请求数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const {scrollTop, isScrollBottom} = useScroll()
watch(isScrollBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => {
      isScrollBottom.value = false
    })
  }
})

const isShowSearch = computed(() => scrollTop.value >= 360)

const moreClick = () => {
  homeStore.fetchHouseList()
}
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;

  .home-banner {
    img {
      width: 100%;
    }
  }

  .search-bar {
    position: fixed;
    z-index: 10;
    padding: 16px 16px 10px;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    background-color: #fff;
  }
}
</style>
