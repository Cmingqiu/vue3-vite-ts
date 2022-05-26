<template>
  <router-view />
</template>

<script setup lang="ts">
import { useSidebarChange } from './hooks/useSidebarChange'
import { useControlStore } from './store/useControlStore'

// 页面初始化设置主题色
const controlStore = useControlStore()
controlStore.switchTheme(controlStore.theme)

useSidebarChange()
</script>

<style lang="scss" scoped></style>
