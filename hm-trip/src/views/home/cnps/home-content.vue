<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item of houseList" :key="item.data.houseId">
        <house-item-v3 v-if="item.discoveryContentType === 3" :house-item="item.data"/>
        <house-item-v9 v-else-if="item.discoveryContentType === 9" :house-item="item.data"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import {storeToRefs} from "pinia";
import HouseItemV3 from "@/components/house-item/house-item-v3.vue";
import HouseItemV9 from "@/components/house-item/house-item-v9.vue";

const homeStore = useHomeStore();
const {houseList} = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.content {
  .title {
    font-size: 24px;
    margin: 0 0 12px 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
  }
}
</style>
