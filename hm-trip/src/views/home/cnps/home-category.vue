<template>
  <div class="category">
    <template v-for="item of categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore();
const {categories} = storeToRefs(homeStore);

</script>

<style lang="less" scoped>
.category {
  padding: 20px 15px;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    display: flex;
    width: 68px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:active {
      transform: translateY(2px);
    }

    img {
      height: 32px;
    }

    .title {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>
