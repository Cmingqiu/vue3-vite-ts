<template>
  <el-scrollbar class="scroll-panel">
    <slot />
  </el-scrollbar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.scroll-panel {
  width: 100%;
  position: relative;
  white-space: nowrap;
}
</style>
