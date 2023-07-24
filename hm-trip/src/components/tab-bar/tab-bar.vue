<template>
  <div class="tab-bar">
    <van-tabbar v-model="tabbarActive" active-color="#ff9854">
      <template v-for="(item, index) of tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img :src="props.active ? getAssetURL(item.imageActive) : getAssetURL(item.image)" alt=""/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import {ref} from "vue";
import {getAssetURL} from "@/utils/load_assets";

const tabbarActive = ref(0)
</script>

<style lang="less" scoped>
:deep(.van-tabbar-item__icon img) {
  height: 25px;
}
</style>
