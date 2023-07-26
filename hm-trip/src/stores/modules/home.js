import {defineStore} from "pinia";
import {getHotSuggestsData} from "@/services/modules/home";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
