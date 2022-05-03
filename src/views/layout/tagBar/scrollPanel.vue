<template>
  <el-scrollbar ref="scrollbarDom" class="scroll-panel" @wheel.passive="handleWhellScroll">
    <slot />
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ElScrollbar } from 'element-plus'

const scrollLeft = ref<number>(0)
const scrollbarDom = ref<typeof ElScrollbar | null>(null)
/** 监听鼠标滚动事件 */
function handleWhellScroll(e: any) {
  console.log(e)
  let distance = 0
  let speed = 5
  if (e.wheelDelta > 0) {
    distance = -10
  } else {
    distance = 10
  }
  // console.log(scrollLeft.value + eventDelta / 4)
  scrollbarDom.value?.setScrollLeft(scrollLeft.value + distance * speed)
}
</script>

<style lang="scss" scoped>
.scroll-panel {
  width: 100%;
  position: relative;
  padding: 0 10px;
  box-shadow: 0 0 10px 0 rgba(48, 43, 99, 0.8);

  :deep(.el-scrollbar__view) {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
<style></style>
