<template>
  <!-- 默认写法 -->
  <div class="app">
    <tab-control 
      :titles="['衣服', '裤子', '皮鞋']"
      @tab-item-click="tabItemClick"/>
    <h2>{{ pageContents[currentIndex] }}</h2>

    <!-- 1.作用域插槽 button -->
    <tab-control 
      :titles="['衣服', '裤子', '皮鞋']"
      @tab-item-click="tabItemClick">
      <template #default="props">
        <button>{{ props.item }} - {{ props.abc }}</button>
      </template>
    </tab-control>

    <!-- 2.作用域插槽 a 元素 -->
    <tab-control 
      :titles="['衣服1', '裤子1', '皮鞋1']"
      @tab-item-click="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }} - {{ props.abc }}</a>
      </template>
    </tab-control>

    <!-- 3.default 插槽可以省略 default -->
    <tab-control 
      :titles="['衣服2', '裤子2', '皮鞋2']"
      @tab-item-click="tabItemClick">
      <template v-slot="props">
        <button>{{ props.item }} - {{ props.abc }}</button>
      </template>
    </tab-control>

    <!-- 4. 如果只有一个插槽,  可以省略 template, 数据接收可以写到组件上 -->
    <tab-control 
      :titles="['衣服3', '裤子3', '皮鞋3']"
      @tab-item-click="tabItemClick"
      v-slot="props">
        <button>{{ props.item }} - {{ props.abc }}</button>
    </tab-control>
  </div>

  
    
  
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  data() {
    return {
      pageContents: ["衣服列表", "裤子列表", "鞋子列表"],
      currentIndex: 0
    }
  },
  components: {
    TabControl
  }, 
  methods: {
    tabItemClick(tabIndex) {
      this.currentIndex = tabIndex
    }
  }
}
</script>

<style scoped>
</style>