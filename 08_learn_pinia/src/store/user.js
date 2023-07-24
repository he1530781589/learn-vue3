import { defineStore } from "pinia";

const useUser = defineStore("user", {
  state: () => ({
    name: "kobe",
    age: 18,
    birthday: "2000/01/01"
  })
})

export default useUser