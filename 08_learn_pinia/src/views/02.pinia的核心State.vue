<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>birthday: {{ birthday }}</h2>
    <button @click="resetUserState">重置</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useUser from '../store/user'

  const userStore = useUser()
  const { name, age, birthday } = storeToRefs(userStore)

  // 1.修改store属性
  // userStore.name = "hemin"
  // userStore.age = 21
  // userStore.birthday = "1999/01/22"

  // 2.一次性修改多条数据
  // userStore.$patch({
  //   name: "james",
  //   age: 45
  // })

  // 3.替换state(应该是在底层合并了两个对象, 并没有直接覆盖原对象)
  const oldSate = userStore.$state
  userStore.$state = {
    name: "james",
    age: 46
  }
  console.log(oldSate === userStore.$state)

  // 4.重置
  function resetUserState() {
    userStore.$reset()
  }

</script>

<style scoped>
</style>