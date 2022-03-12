<template>
  <div class="layout">
    <!-- aside -->
    <aside :style="{ width: !isCollapse ? '250px' : '' }">
      <div class="logo">
        <img src="/public/logo.png" alt="" srcset="" />
        <b>Vue Admin</b>
      </div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        :default-active="currentRoutePath"
        unique-opened
        router
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="menu in menuList" :key="menu.name">
          <div v-if="menu.children && menu.children.length > 0">
            <el-sub-menu :index="menu.path">
              <template #title>
                <el-icon>
                  <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.name }}</span>
              </template>

              <el-menu-item
                v-for="subMenu in menu.children"
                :key="subMenu.name"
                :index="subMenu.path"
              >
                <template #title>
                  <el-icon>
                    <component :is="menu.icon" />
                  </el-icon>
                  {{ subMenu.name }}
                </template>
              </el-menu-item>
            </el-sub-menu>
          </div>

          <div v-else>
            <el-menu-item :index="menu.path">
              <el-icon>
                <component :is="menu.icon" />
              </el-icon>
              <template #title>
                {{ menu.name }}
              </template>
            </el-menu-item>
          </div>
        </template>
      </el-menu>
    </aside>
    <!-- main -->
    <main>
      <NavBar />
      <div class="app-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useIndexStore } from '@/store'
// 按需引入
// import { Grid, Fold, Expand, Setting } from '@element-plus/icons-vue'
import menuList from '@/assets/menu'
import NavBar from './navBar.vue'

const route = useRoute()
const indexStore = useIndexStore()
const isCollapse = computed(() => indexStore.isCollapse)
const currentRoutePath = computed(() => route.path)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('handleOpen', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('handleClose', key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  aside {
    height: 100%;
    float: left;
    background-color: #545c64;
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
      transition-duration: 0.1s;
    }
  }
  main {
    height: 100%;
    overflow: hidden;

    .app-wrapper {
      padding: 10px;
      position: relative;
      height: calc(100% - 50px);
    }
  }
}

:deep(.custom-class) {
  // 自定义样式404
  font-size: 200px;
  color: green;
}
</style>
