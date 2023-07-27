<template>
  <div class="house-item">
    <div class="inner">
      <div class="cover">
        <img :src="houseItem.image.url" alt=""/>
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">{{ houseItem.location }}
        </div>
        <div class="title">{{ houseItem.houseName }}</div>
        <div class="desc">{{ houseItem.summaryText }}</div>
        <div class="price">
          <div class="new">¥{{ houseItem.productPrice }}</div>
          <div class="old">¥{{ houseItem.finalPrice }}</div>
          <div class="text" v-if="houseItem.priceTipBadge">{{ houseItem?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  houseItem: {
    type: Object,
    default: () => ({})
  }
})
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
    padding: 6px 8px;
    bottom: 0;

    .location {
      font-size: 12px;
      color: #666;

      img {
        height: 14px;
        position: relative;
        top: 1px;
      }
    }

    .desc {
      font-size: 12px;
      color: #666;
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
      margin-top: 8px;
      display: flex;
      align-items: start;

      .new {
        color: var(--primary-color);
      }

      .old {
        margin-left: 5px;
        color: #666;
        font-size: 12px;
        text-decoration: line-through;
      }

      .text {
        margin-left: 5px;
        padding: 2px 4px;
        border-radius: 8px;
        color: #fff;
        font-size: 12px;
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
      }
    }
  }

}
</style>
