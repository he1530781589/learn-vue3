import {defineStore} from "pinia";
import {getCityAll} from "@/services/modules/city";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: [],

    currentCity: {
      cityName: "苏州"
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const {data} = await getCityAll()
      this.allCities = data
    }
  }
})

export default useCityStore
