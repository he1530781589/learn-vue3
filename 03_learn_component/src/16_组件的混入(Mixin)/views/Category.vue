<template>
  <div class="home">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import messageMixin from '../mixins/message-mixin'
export default {
  mixins: [messageMixin]
}
</script>

<style scoped>
</style>