<!-- 分页查询100条，列表项定高30px -->
<template>
  <section ref="container" class="virtual-scroll" @scroll="scroll">
    <!-- 占位撑开，便于显示滚动条 -->
    <div class="placeholder" :style="{ height: `${placeholderHeight}px` }"></div>

    <!-- 列表 -->
    <div
      class="list"
      :style="{
        transform: `translateY(${moveY}px)`
      }"
    >
      <div v-for="item in scrollList" :key="item" class="list-item">
        {{ item.name }}
      </div>
      <div v-show="loading" class="loading-txt">加载中...</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { getPageList } from '@/api/request'
import { useFetchPageList } from '@/hooks/useFetchPageList'

const { loading, sourceData, fetch } = useFetchPageList(getPageList)
// 每个列表项的高度(包含margin) 定高高度只能写在常量中
// 不能通过offsetHeight获取，因为是先计算再渲染才能拿到dom
const HEIGHT = 40
// 占位的高度
const placeholderHeight = computed(() => sourceData.length * HEIGHT)

// 容器
const container = ref<HTMLElement | null>(null)
// 容器移动距离
const moveY = ref(0)
// 可视区域的列表
const scrollList = ref<any[]>([])

function scrollUpdate(scrollTop = 0) {
  const containerHeight = container.value!.clientHeight
  // 容器最大能展示列表项个数
  const maxCount = Math.ceil(containerHeight / HEIGHT)
  const startIndex = Math.floor(scrollTop / HEIGHT)
  const endIndex = startIndex + maxCount
  scrollList.value = sourceData.slice(startIndex, endIndex + 1)
  moveY.value = startIndex * HEIGHT //- 20
}

async function scroll() {
  const scrollTop = container.value!.scrollTop
  // 滚动到底部请求
  if (Math.round(scrollTop + container.value!.clientHeight) === container.value!.scrollHeight) {
    await fetch()
  }

  scrollUpdate(scrollTop)
}

onMounted(async () => {
  await fetch()
  scrollUpdate()
})
</script>

<style lang="scss" scoped>
.virtual-scroll {
  width: 200px;
  height: 400px;
  margin: 20px auto;
  overflow: auto;
  border: 1px solid black;
  position: relative;
  .placeholder {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
    background-color: rebeccapurple;
  }
  .list {
    position: relative;
    z-index: 1;
    &-item {
      box-sizing: border-box;
      background-color: aqua;
      height: 30px;
      margin-bottom: 10px;
      line-height: 30px;
    }

    .loading-txt {
      text-align: center;
      color: gray;
    }
  }
}
</style>
