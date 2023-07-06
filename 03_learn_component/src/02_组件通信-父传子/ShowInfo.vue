<template>
  <div class="infos">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>
  </div>

  <!-- 通过$attrs来绑定props中未定义的属性 -->
  <div class="others" v-bind="$attrs">other</div>
</template>

<script>
export default {
  /**
   * 1.使用数组接受父组件传递的属性
   * 弊端: 无法指定默认值, 不能验证传递的类型
   */
  // props: ["name", "age", "height"]


  /**
   * 2.通过对象来定义props
   */
  props: {
    // 阻止接收非props属性
    // inheritAttrs: false,
    name: {
      type: String,
      default: "我是一个默认值, 在没有传递的时候展示"
    },
    age: {
      type: Number,
      // required, 用于指定是否必须传递, 如果为true, 则父组件中必须传递该属性
      required: true,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    // 重要的原则: 引用类型编写默认值时, 需要使用default函数, 通过函数来返回默认值
    hobbies: {
      type: Array,
      default: () => ["唱", "跳", "rap"]
    }
  }

}
</script>

<style scoped>
.infos {
  background-color: aqua;
}
</style>