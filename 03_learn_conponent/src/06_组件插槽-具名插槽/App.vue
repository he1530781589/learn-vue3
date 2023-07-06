<template>
  <div class="app">
    <nav-bar>
      <template v-slot:left>
        <span>内容</span>
      </template>

      <template v-slot:center>
        <button>按钮</button>
      </template>

      <!-- v-slot指令的语法糖: "#" -->
      <template #right>
        <a href="#">注册</a>
      </template>

      <!-- 未指定 slot 绑定的 name, 则会找 name 为 default 的插槽 -->
      <template v-slot>
        <a href="#">未指定 slot </a>
      </template>
    </nav-bar>

    <!-- 动态指定插槽位置: [] -->
    <nav-bar>
      <template v-slot:[position]>
        <button>动态插槽</button>
      </template>
    </nav-bar>
    <button @click="position = 'left'">left</button>
    <button @click="position = 'center'">center</button>
    <button @click="position = 'right'">right</button>
    <button @click="position = 'default'">default</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  data() {
    return {
      position: "left"
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>
</style>