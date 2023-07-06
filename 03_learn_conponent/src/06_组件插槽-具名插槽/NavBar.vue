<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>

    <div class="center">
      <slot name="center">center</slot>
    </div>

    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>

  <div class="other">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.nav-bar .left {
  width: 80px;
  background-color: aqua;
}

.nav-bar .center {
  flex: 1;
  background-color: orange;
}

.nav-bar .right {
  width: 80px;
  background-color: skyblue;
}
</style>