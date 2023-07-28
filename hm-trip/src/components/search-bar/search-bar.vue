<template>
  <div class="search">
    <div class="date-section" @click="dateClick">
      <div class="item start">
        <span class="tip">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="item end">
        <span class="tip">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="content-section">
      <div class="keyword">关键字/位置/民宿</div>
      <i class="search-icon"></i>
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import {formatDate} from "@/utils/date";

const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore);
const startDateStr = computed(() => formatDate(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatDate(endDate.value, "MM.DD"))

const dateClick = () => {
  mainStore.showCalendar = true
}

</script>

<style lang="less" scoped>
.search {
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 0 10px;
  border-radius: 10px;

  color: #999;
  background-color: #f2f4f6;

  .date-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2px;
    font-size: 12px;

    .item {
      .date {
        margin-left: 5px;
        color: #333;
        font-weight: 500;
      }
    }

    .end {
      margin-top: 1px;

      .date {
        position: relative;
        padding-right: 8px;

        &::after {
          content: "";
          position: absolute;
          bottom: 3px;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 5px 5px;
          border-color: transparent transparent #333 transparent;
        }
      }
    }
  }

  .content-section {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-left: 1px solid #fff;
    align-items: center;

    .search-icon {
      width: 24px;
      height: 24px;

      background-image: url(@/assets/img/home/home-sprite.png);
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>
