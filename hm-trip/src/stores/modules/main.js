import {defineStore} from "pinia";
import {getTodayAndTomorrow} from "@/utils/date";


const useMainStore = defineStore("main", {
  state: () => ({
    startDate: getTodayAndTomorrow().today,
    endDate: getTodayAndTomorrow().tomorrow
  }),
})

export default useMainStore
