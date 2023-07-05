<template> 
  <!-- 非props指定的attribute, 默认会传递给子组件的根节点上-->
  <show-info name="hm" :age="18" :height="2" abc="333"/>

  <show-info name="kobe" :age="18" :height="2"/>

  <show-info name="bob" :age="20"/>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo
  }
}
</script>

<style scoped>
</style>