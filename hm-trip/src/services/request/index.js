import axios from 'axios'
import {BASE_URL, TIMEOUT} from './config'
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

class HMRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // request监听
    this.instance.interceptors.request.use(config => {
      mainStore.showLoading = true
      return config
    }, error => {
      mainStore.showLoading = false
      return error
    })

    // response监听
    this.instance.interceptors.response.use(res => {
      mainStore.showLoading = false
      return res
    }, error => {
      mainStore.showLoading = false
      return error
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default new HMRequest(BASE_URL, TIMEOUT)


