<template>
  <div class="tab-control">
    <div class="item" 
        v-for="(item, index) in titles"
        :class="{active: index === currentIndex}" 
        @click="itemClick(index)"
        >
      <span class="content">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["tabItemClick"],
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default: () => ["衣服", "裤子", "鞋子"]
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("tabItemClick", this.currentIndex)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    /* background-color: orange; */

  }

  .tab-control .item {
    flex: 1;
    cursor: pointer;
  }

  .tab-control .item.active {
    color: red;
    font-weight: 700;
  }

  .tab-control .item.active span {
    padding: 10px;
    border-bottom: 3px solid red;
  }
</style>