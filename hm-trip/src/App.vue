<template>
  <div class="app">
    <router-view></router-view>
    <calendar/>
    <loading/>
    <tab-bar/>
  </div>
</template>

<script setup>


import Calendar from "@/components/calendar/calendar.vue";
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
</script>

<style lang="less" scoped>

</style>
