<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" :sticky="false">
      <div class="hot">
        <van-index-anchor index="热门"/>
        <div class="hot-list">
          <template v-for="item of groupData.hotCities">
            <div class="item" @click="itemClick(item)">{{ item.cityName }}</div>
          </template>
        </div>
      </div>
      <div class="index-list">
        <template v-for="(group) of groupData.cities">
          <van-index-anchor :index="group.group"/>
          <template v-for="(city) of group.cities">
            <van-cell :title="city.cityName" @click="itemClick(city)"/>
          </template>
        </template>
      </div>
    </van-index-bar>
  </div>
</template>

<script setup>
import {computed} from "vue";
import useCityStore from "@/stores/modules/city";
import router from "@/router";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const arr = props.groupData.cities.map(item => item.group)
  arr.unshift("#")
  return arr
})

const cityStore = useCityStore()
const itemClick = (item) => {
  cityStore.currentCity = item
  router.back()
}
</script>

<style lang="less" scoped>
.hot-list {
  display: flex;
  padding: 10px 20px 10px 10px;
  flex-wrap: wrap;
  justify-content: space-around;

  .item {
    width: 70px;
    height: 28px;
    margin: 6px;
    font-size: 12px;
    color: #333;
    line-height: 28px;
    text-align: center;
    background-color: #fff4ec;
    border-radius: 14px;

  }
}
</style>
