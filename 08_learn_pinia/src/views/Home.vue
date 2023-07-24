<template>
  <div class="home">
    <h2>Banner列表</h2>
    <ul>
      <template v-for="item in banners">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useHome from '../store/home'

  const homeStore = useHome()
  homeStore.fetchHomeData()
  
  const { banners } = storeToRefs(homeStore)

</script>

<style scoped>
</style>