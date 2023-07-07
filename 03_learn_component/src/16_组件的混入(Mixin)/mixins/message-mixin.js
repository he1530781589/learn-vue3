export default {
  data() {
    return {
      message: "Hello Mixin"
    }
  },
  created() {
    console.log("message:", this.message)
  }
}