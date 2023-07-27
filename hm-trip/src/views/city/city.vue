<template>
  <div class="city">
    <div class="top">
      <van-search
          v-model="searchValue"
          placeholder="城市/区域/位置"
          shape="round"
          show-action
          @cancel="onCancel"
      />
      <van-tabs v-model:active="tabActive">
        <template v-for="(value, key) of allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) of allCities">
        <city-group v-show="key === tabActive" :group-data="value"/>
      </template>
    </div>
    <van-back-top target=".content" right="5vw" bottom="4vh" />
  </div>
</template>

<script setup>
import {ref} from "vue";
import router from "@/router";
import useCityStore from "@/stores/modules/city";
import {storeToRefs} from "pinia";
import CityGroup from "@/views/city/cnps/city-group.vue";

const searchValue = ref("")
const tabActive = ref(0)

// 请求数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allCities} = storeToRefs(cityStore)

const onCancel = () => {
  router.back()
}

</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 99;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
