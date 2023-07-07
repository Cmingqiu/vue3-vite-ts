<!-- 假设数据是1000条，列表项定高30px -->
<template>
  <section ref="container" class="virtual-scroll" @scroll="scroll">
    <!-- 列表  使用padding占位撑开，便于显示滚动条-->
    <div
      class="list"
      :style="{
        transform: `translateY(${moveY}px)`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`
      }"
    >
      <div v-for="item in scrollList" :key="item" class="list-item">
        {{ item }}
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

// 每个列表项的高度(包含margin) 定高高度只能写在常量中
// 不能通过offsetHeight获取，因为是先计算再渲染才能拿到dom
const HEIGHT = 40
const paddingTop = ref(0)
const paddingBottom = ref(0)

// 列表数据源
const list = new Array(10000000).fill(0).map((v, i) => i + 1)
// 容器
const container = ref<HTMLElement | null>(null)
// 容器移动距离
const moveY = ref(0)
// 可视区域的列表
const scrollList = ref<number[]>([])

function scrollUpdate(scrollTop = 0) {
  const containerHeight = container.value!.clientHeight
  // 容器最大能展示列表项个数
  const maxCount = Math.ceil(containerHeight / HEIGHT)
  const startIndex = Math.floor(scrollTop / HEIGHT)
  const endIndex = startIndex + maxCount + 1

  // 优化：如果是用户滚动触发的，而且两次startIndex的值都一样，那么就没有必要执行下面的逻辑
  // if (!isNeedLoad && lastStartIndex.current === startIndex) return

  // 设置padding
  paddingTop.value = startIndex * HEIGHT
  scrollList.value = list.slice(startIndex, endIndex)
  moveY.value = startIndex * HEIGHT

  /**
   * 解决滑动过快出现的白屏问题：注意endIndex要在startIndex人为改变之前就计算好
   * 因为我们实际上需要三板的数据用于兼容低性能的设备，用做上下滚动的缓冲区域，避免滑动的时候出现白屏
   * 现在的startIndex是可视区的第一个元素索引，再加上2倍可视区元素量，刚好在下方就会多出一板来当做缓冲区
   */
  // 此处的endIndex是为了在可视区域的下方多出一板数据
  let endIndex = startIndex + 2 * containerMaxSize - 1
  // 接近滚动到屏幕底部的时候，就可以请求发送数据了，这个时候触底的并不是可视区的最后一个元素，而是多出那一版的最后一个元素触底了
  const currLen = dataListRef.current.length
  if (endIndex > currLen - 1) {
    // 更新请求参数，发送请求获取新的数据(但是要保证当前不在请求过程中，否则就会重复请求相同的数据)
    !isRequestRef.current && setOptions((state) => ({ offset: state.offset + 1 }))
    // 如果已经滚动到了底部，那么就设置endIndex为最后一个元素索引即可
    endIndex = currLen - 1
  }
  // 此处的endIndex是为了在可视区域的上方多出一板数据
  // 这里人为的调整startIndex的值，目的就是为了能够在可视区域上方多出一板来当做缓冲区
  if (startIndex <= containerMaxSize) {
    // containerMaxSize是我们之前计算出来的容器容纳量
    startIndex = 0
  } else {
    startIndex = startIndex - containerMaxSize
  }
  // 使用slice方法截取数据，但是要记住第二个参数对应的索引元素不会被删除，最多只能删除到它的前一个，所以我们这里的endIndex需要加一
  setShowList(dataListRef.current.slice(startIndex, endIndex + 1))
}

function scroll() {
  const scrollTop = container.value!.scrollTop
  scrollUpdate(scrollTop)
}

onMounted(scrollUpdate)
</script>

<style lang="scss" scoped>
.virtual-scroll {
  width: 200px;
  height: 400px;
  margin: 20px auto;
  overflow: auto;
  border: 1px solid black;
  .list {
    &-item {
      box-sizing: border-box;
      background-color: aqua;
      height: 30px;
      margin-bottom: 10px;
      line-height: 30px;
    }
  }
}
</style>
