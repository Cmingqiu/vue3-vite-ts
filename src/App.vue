<template>
  <router-view />
</template>

<script setup lang="ts">
import { sidebarChange } from './hooks/sidebar-change'

sidebarChange()
</script>

<style lang="scss" scoped></style>
