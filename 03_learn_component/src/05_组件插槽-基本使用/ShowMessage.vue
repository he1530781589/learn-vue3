<template>
  <div class="slot">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot>
        <p>我是插槽的默认内容</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  }
}
</script>

<style scoped>
</style>