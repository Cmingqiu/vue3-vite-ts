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
      <el-icon class="setting-icon" @click="drawerVisible = true"><Tools /></el-icon>
      <SvgIcon
        v-if="showFullscreen"
        class="fullscreen-icon"
        :title="isFullscreen ? '退出全屏' : '全屏'"
        :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
        @click="fullscreenToggle"
      ></SvgIcon>
      <Avatar />
    </div>

    <RightPanel v-model="drawerVisible">
      <div class="other-configure">
        <span class="other-configure--title">其他设置</span>
        <div class="other-configure-item">
          显示logo <el-switch v-model="showLogo" :active-color="variables.menuBg" />
        </div>
        <div class="other-configure-item">
          显示tag栏 <el-switch v-model="showTag" :active-color="variables.menuBg" />
        </div>
        <div class="other-configure-item">
          显示全屏按钮 <el-switch v-model="showFullscreen" :active-color="variables.menuBg" />
        </div>
      </div>
    </RightPanel>
  </nav>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/useLayoutStore'
import screenfull from 'screenfull'
import Avatar from './avatar.vue'
import RightPanel from '@/components/RightPanel.vue'
import useControlDrawer from './useControlDrawer'
import variables from '@/styles/variable.module.scss'

const route = useRoute()
const layoutStore = useLayoutStore()
const isCollapse = computed(() => layoutStore.isCollapse)
const matchedRoute = computed(() => route.matched.filter((r) => r.path !== '/'))
const isFullscreen = ref<boolean>(false)
const drawerVisible = ref<boolean>(false) //右侧设置弹框
const { showLogo, showTag, showFullscreen } = useControlDrawer()

// 侧边栏开关
const collapseHandle = () => {
  layoutStore.collapseHandle(!isCollapse.value)
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
// onMounted(initFullscreen)
onBeforeUnmount(removeListener)
</script>
