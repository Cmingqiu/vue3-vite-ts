<template>
  <router-view />
</template>

<script setup lang="ts">
import { useSidebarChange } from './hooks/useSidebarChange'

useSidebarChange()
</script>

<style lang="scss" scoped></style>
