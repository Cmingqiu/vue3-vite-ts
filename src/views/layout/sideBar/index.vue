<template>
  <aside>
    <div class="logo">
      <img :src="logoSrc" alt="" srcset="" />
      <b>Vue Admin</b>
    </div>
    <el-menu
      :active-text-color="variables.menuActiveText"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :default-active="currentRoutePath"
      unique-opened
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <SideBarItem v-for="menu in menuList" :key="menu.name" :menu="menu" />
    </el-menu>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useIndexStore } from '@/store/useIndexStore'
import menuList from '@/assets/menu'
import SideBarItem from './sideBarItem.vue'
import variables from '@/styles/variable.module.scss'

const route = useRoute()
const indexStore = useIndexStore()
const isCollapse = computed(() => indexStore.isCollapse)
const currentRoutePath = computed(() => route.path)
const logoSrc = computed(() => `${import.meta.env.BASE_URL}logo.png`)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('handleOpen', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('handleClose', key, keyPath)
}
</script>

<style lang="scss" scoped>
aside {
  height: 100%;
  float: left;
  background-color: v-bind('variables.menuBg');
  .logo {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    img {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
  .el-menu {
    border: 0;
    height: calc(100% - 50px);
    overflow-y: auto;
    // transition-duration: 0.1s;
    &:not(.el-menu--collapse) {
      width: v-bind('variables.sideBarWidth');
      // width: $sideBarWidth;  //和vite.config.js中的css配合使用
    }
  }
}
</style>
