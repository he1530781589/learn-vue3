import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

export default function useScroll() {
  const isScrollBottom = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollHeight.value = document.documentElement.scrollHeight
    scrollTop.value = document.documentElement.scrollTop
    console.log(scrollTop.value)
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isScrollBottom.value = true
    }
  }, 200)

  onMounted(() => {
    document.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(() => {
    document.removeEventListener("scroll", scrollListenerHandler)
  })

  return {
    scrollTop,
    clientHeight,
    scrollHeight,
    isScrollBottom
  }
}
