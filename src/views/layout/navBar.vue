<template>
  <nav>
    <div class="left">
      <i class="fold-btn" @click="collapseHandle">
        <el-icon :size="20">
          <component :is="!isCollapse ? 'Fold' : 'Expand'"></component>
        </el-icon>
      </i>

      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="r in matchedRoute" :key="r.path">
          {{ r.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right">
      <el-icon class="setting-icon"><Tools /></el-icon>
      <SvgIcon
        :title="isFullscreen ? '退出全屏' : '全屏'"
        :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
        style="cursor: pointer"
        @click="fullscreenToggle"
      ></SvgIcon>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useIndexStore } from '@/store/useIndexStore'
import screenfull from 'screenfull'

const route = useRoute()
const indexStore = useIndexStore()
const isCollapse = computed(() => indexStore.isCollapse)
const matchedRoute = computed(() => route.matched.filter((r) => r.path !== '/'))
const isFullscreen = ref<boolean>(false)

// 侧边栏开关
const collapseHandle = () => {
  indexStore.collapseHandle(!isCollapse.value)
}
// 全屏开关
const fullscreenToggle = () => {
  if (screenfull.isEnabled) screenfull.toggle()
}

const initFullscreen = () => {
  const changeIsFullscreen = () => (isFullscreen.value = screenfull.isFullscreen)
  if (screenfull.isEnabled) screenfull.on('change', changeIsFullscreen)
  return () => {
    if (screenfull.isEnabled) screenfull.off('change', changeIsFullscreen)
  }
}
const removeListener = initFullscreen()
onMounted(initFullscreen)
onBeforeUnmount(removeListener)
</script>

<style scoped lang="scss">
nav {
  height: 50px;
  padding: 0 10px;
  .left,
  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
    .setting-icon {
      margin-right: 5px;
      font-size: 20px;
      cursor: pointer;
    }
  }

  border-bottom: 1px solid #ccc;
  .fold-btn {
    cursor: pointer;
    color: #0080ff;
    margin-right: 20px;
  }
  .fullscreen-icon {
    cursor: pointer;
  }
}
</style>
