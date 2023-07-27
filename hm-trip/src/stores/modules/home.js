import {defineStore} from "pinia";
import {getCategories, getHotSuggestsData, getHouseList} from "@/services";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: []
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHouseList(this.currentPage)
      this.currentPage++
      this.houseList.push(...res.data)
    }
  }
})

export default useHomeStore
