<template>
  <div class="content">
    <h2>Content</h2>
    <app-content-list/>
  </div>
</template>

<script>
import AppContentList from './AppContentList.vue';
export default {
  components: {
    AppContentList
  }
}
</script>

<style scoped>
.content{
  background-color: orange;
}
</style>