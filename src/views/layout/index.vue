<template>
  <div class="layout">
    <!-- aside -->
    <SideBar />
    <!-- main -->
    <main>
      <NavBar />
      <div class="app-main">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 按需引入
// import { Grid, Fold, Expand, Setting } from '@element-plus/icons-vue'
import SideBar from './sideBar.vue'
import NavBar from './navBar.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  main {
    height: 100%;
    overflow: hidden;
    .app-main {
      padding: 10px;
      position: relative;
      height: calc(100% - 50px);
    }
  }
}
</style>
