<template>
  <div class="app">
    <h2 ref="title" banner="title" class="title" :style="{ color: titleColor }">{{ message }}</h2>
    <button ref="button" @click="changeTitle">修改title</button>

    <banner ref="banner"/>
  </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
  components: {
    Banner
  },
  data() {
    return {
      message: "Hello World",
      titleColor: "red"
    }
  },
  methods: {
    changeTitle() {
      // 1. 通过 ref 获取 title 和 button
      console.log(this.$refs.title)
      console.log(this.$refs.button)

      // 2.1.获取组件实例对象
      console.log(this.$refs.banner)

      // 2.2.获取 banner 组件的属性
      console.log(this.$refs.banner.$data.message)

      // 2.3.调用子组件的方法
      this.$refs.banner.bannerClick()

      // 2.4.如果banner template是多个根, 拿到的是第一个node节点
      // 注意: 开发中不推荐一个组件的template中有多个根元素
      // console.log(this.$refs.banner.$el.nextElementSibling)

      // 4.组件实例还有两个属性(了解):
      // console.log(this.$parent) // 获取父组件
      // console.log(this.$root) // 获取根组件 
    }
  }
}
</script>

<style scoped>
</style>