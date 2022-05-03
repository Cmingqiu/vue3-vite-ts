<template>
  <aside>
    <div v-show="showLogo" class="logo">
      <img :src="logoSrc" alt="" srcset="" />
      <b v-show="!isCollapse">Vue3 Admin</b>
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
      <SideBarItem v-for="menu in menuList" :key="menu.name" :menu="menu" :base-path="menu.path" />
    </el-menu>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/useLayoutStore'
import router from '@/router'
import SideBarItem from './sideBarItem.vue'
import variables from '@/styles/variable.module.scss'
import useControlDrawer from '@/views/layout/navBar/useControlDrawer'

const route = useRoute()
const layoutStore = useLayoutStore()
const menuList = computed(() => router.options.routes)
const isCollapse = computed(() => layoutStore.isCollapse)
const currentRoutePath = computed(() => route.path)
const logoSrc = computed(() => `${import.meta.env.BASE_URL}logo.png`)
const { showLogo } = useControlDrawer()
const logoHeight = computed(() => (showLogo.value ? 'calc(100% - 50px)' : '100%'))

const handleOpen = (index: string, indexPath: string[]) => {
  console.log('handleOpen', indexPath)
}
const handleClose = (index: string, indexPath: string[]) => {
  console.log('handleClose', indexPath)
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
    height: v-bind(logoHeight);
    overflow-y: auto;
    // transition-duration: 0.1s;
    &:not(.el-menu--collapse) {
      width: v-bind('variables.sideBarWidth');
      // width: $sideBarWidth;  //和vite.config.js中的css配合使用
    }
  }
}
</style>
