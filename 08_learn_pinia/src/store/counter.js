import { defineStore } from "pinia";
import useUser from './user'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 100, name: "hemin" },
      { id: 101, name: "kobe" },
      { id: 102, name: "james" },
    ]
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2
    },
    // 2.操作另一个getter
    doubleCountAddOne() {
      return this.doubleCount + 1
    },
    // 3.返回函数
    getFriendById(state) {
      return function(id) {
        return this.friends.find(item => item.id === id)
      }
    },
    // 4.操作其他store
    showMessage(store) {
      const userStore = useUser()
      return `userStore name[${userStore.name}], counterStore value[${store.count}]`
    }
  },
  actions: {
    increment() {
      this.count ++
    },
    incrementNum(num) {
      this.count += num
    }
  }
})

export default useCounter