<template>
  <router-view />
</template>

<script setup lang="ts">
import { useSidebarChange } from './hooks/useSidebarChange'
import { useControlStore } from './store/useControlStore'

// 页面初始化设置主题色
const controlStore = useControlStore()
controlStore.switchTheme(controlStore.theme)
// 监听resize，判断侧边栏是否收起
useSidebarChange()
</script>

<style lang="scss" scoped></style>
