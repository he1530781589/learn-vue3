<template>
  <div class="calendar">
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
import useMainStore from "@/stores/modules/main";
import {storeToRefs} from "pinia";
import {getDaysDiff} from "@/utils/date";

const mainStore = useMainStore()
const {showCalendar} = storeToRefs(mainStore);
const onConfirm = (range) => {
  mainStore.startDate = range[0]
  mainStore.endDate = range[1]
  mainStore.stay = getDaysDiff(range[0], range[1])
  showCalendar.value = false
}

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

</style>
