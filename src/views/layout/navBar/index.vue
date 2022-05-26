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
      <el-icon class="setting-icon" @click="open"><Tools /></el-icon>
      <SvgIcon
        v-if="showFullscreen"
        class="fullscreen-icon"
        :title="isFullscreen ? '退出全屏' : '全屏'"
        :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
        @click="fullscreenToggle"
      ></SvgIcon>
      <Avatar />
    </div>

    <RightControl ref="RightControlRef" />
  </nav>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/useLayoutStore'
import screenfull from 'screenfull'
import Avatar from './avatar.vue'
import RightControl from './rightControl.vue'
import useControlDrawer from './useControlDrawer'

const { showFullscreen } = useControlDrawer()

const route = useRoute()
const layoutStore = useLayoutStore()
const isCollapse = computed(() => layoutStore.isCollapse)
const matchedRoute = computed(() => route.matched.filter((r) => r.path !== '/'))
const isFullscreen = ref<boolean>(false)
const RightControlRef = ref<InstanceType<typeof RightControl> | null>(null)

// 侧边栏开关
const collapseHandle = () => {
  layoutStore.collapseHandle(!isCollapse.value)
}
// 全屏开关
const fullscreenToggle = () => {
  if (screenfull.isEnabled) screenfull.toggle()
}

const open = () => {
  RightControlRef.value!.drawerVisible = true
}

const initFullscreen = () => {
  const changeIsFullscreen = () => (isFullscreen.value = screenfull.isFullscreen)
  if (screenfull.isEnabled) screenfull.on('change', changeIsFullscreen)
  return () => {
    if (screenfull.isEnabled) screenfull.off('change', changeIsFullscreen)
  }
}
const removeListener = initFullscreen()
// onMounted(initFullscreen)
onBeforeUnmount(removeListener)
</script>
