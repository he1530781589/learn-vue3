<template>
  <div class="house-item">
    <div class="inner">
      <div class="cover">
        <img :src="houseItem.image.url" alt=""/>
      </div>
      <div class="info">
        <div class="desc">{{ houseItem.summaryText }}</div>
        <div class="title">{{ houseItem.houseName }}</div>
        <div class="price">
          <van-rate
              :model-value="rateScore"
              color="#fff"
              :size="16"
              readonly
              allow-half
          />
          <div class="new">¥{{ houseItem.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  houseItem: {
    type: Object,
    default: () => ({})
  }
})

const rateScore = computed(() => Number(props.houseItem.commentScore))
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .inner {
    position: relative;
    margin: 5px;
    border-radius: 5px;
    overflow: hidden;
  }

  .cover {
    img {
      width: 100%;
    }
  }

  .info {
    position: absolute;
    padding: 6px 8px;
    bottom: 0;
    color: #fff;

    .desc {
      font-size: 12px;
    }

    .title {
      margin: 8px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box; /* 改变元素类型 */
      -webkit-line-clamp: 2; /* 展示的行数 */
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
