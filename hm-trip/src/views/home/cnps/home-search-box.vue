<template>
  <div class="home-search" ref="homeSearch">
    <!-- 地区-->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ cityStore.currentCity.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!--  日期选择  -->
    <div class="section date-range bottom-gray-line" @click="dateRangeClick">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stay }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>

    <div class="section price-counter bottom-gray-line">
      <span class="start">价格不限</span>
      <span class="end">人数不限</span>
    </div>

    <div class="section bottom-gray-line">
      <span class="label">关键字/位置/民宿名</span>
    </div>

    <!-- 热门搜索 -->
    <div class="section hot-suggests">
      <template v-for="item of hotSuggests">
        <div
            class="item"
            :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }"
        >{{ item.tagText.text }}
        </div>
      </template>
    </div>

    <div class="section search">
      <van-button
          color="linear-gradient(90deg, #fa8c1d, #fcaf3f)"
          text="开始搜索"
      ></van-button>
    </div>

    <!-- 日历 -->
    <van-calendar
        v-model:show="showCalendar"
        type="range"
        :round="false"
        color="#ff9854"
        :show-confirm="false"
        :formatter="calendarFormatter"
        @confirm="onConfirm"
    />
  </div>
</template>

<script setup>
import router from "@/router";
import useCityStore from "@/stores/modules/city";
import {ref} from "vue";
import {formatDate, getDaysDiff, getTodayAndTomorrow} from "@/utils/date";
import {storeToRefs} from "pinia";
import useHomeStore from "@/stores/modules/home";
import {useDisableTextSelection} from "@/hooks/useDisableTextSelection";

const showCalendar = ref(false)
const cityStore = useCityStore()
const stay = ref(getTodayAndTomorrow().stay)
const startDate = ref(getTodayAndTomorrow().today)
const endDate = ref(getTodayAndTomorrow().tomorrow)
const homeSearch = ref(null)

useDisableTextSelection([homeSearch])

const homeStore = useHomeStore();
const {hotSuggests} = storeToRefs(homeStore)
console.log(hotSuggests);

const cityClick = () => {
  router.push("/city")
}

const dateRangeClick = () => {
  showCalendar.value = true
}

const onConfirm = (range) => {
  startDate.value = formatDate(range[0])
  endDate.value = formatDate(range[1])
  stay.value = getDaysDiff(range[0], range[1])
  showCalendar.value = false
}

// Vant日历插件插件格式化
const calendarFormatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day
}
</script>

<style lang="less" scoped>
.home-search {
  // vant组件局部属性
  --van-calendar-popup-height: 100vh;

  .location {
    height: 44px;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    .city {
      flex: 1;
    }

    .position {
      display: flex;
      align-items: center;
      width: 80px;
      font-size: 12px;
      color: #646566;

      .text {
        margin-right: 6px;
      }

      img {
        position: relative;
        top: -1px;
        width: 18px;
      }
    }
  }

  .section {
    display: flex;
    padding: 0 20px;
    height: 44px;
    color: #999;
    align-items: center;

    .start {
      flex: 1;
      height: 44px;
      display: flex;
      align-items: center;
    }

    .end {
      padding-left: 20px;
      min-width: 30%;
    }

    .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-size: 12px;
      }

      .time {
        margin-top: 3px;
        font-size: 15px;
        font-weight: 500;
        color: #333;
      }
    }
  }

  .date-range {
    .stay {
      flex: 1;
      text-align: center;
    }
  }

  .price-counter {
    .start {
      border-right: 1px solid var(--line-color);
    }
  }

  .hot-suggests {
    height: auto;
    padding: 15px 20px;
    flex-wrap: wrap;

    .item {
      font-size: 12px;
      margin: 5px;
      padding: 4px 10px;
      border-radius: 14px;
    }
  }

  .search {
    :deep(.van-button.van-button--default.van-button--normal) {
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      border-radius: 22px;
    }
  }
}
</style>
