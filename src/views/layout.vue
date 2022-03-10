<template>
  <div class="layout">
    <!-- aside -->
    <aside :style="{ width: !isCollapse ? '250px' : '' }">
      <div class="logo">logo</div>
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
      <div class="top">
        <i class="fold-btn" @click="collapseHandle">
          <el-icon :size="20">
            <Fold v-show="!isCollapse" /> <Expand v-show="isCollapse" />
          </el-icon>
        </i>

        <el-breadcrumb separator-icon="ArrowRight">
          <el-breadcrumb-item v-for="r in matchedRoute" :key="r.path">
            {{ r.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="wrap-app">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
// 按需引入
// import { Grid, Fold, Expand, Setting } from '@element-plus/icons-vue'
import menuList from '@/assets/menu'

const route = useRoute()
const isCollapse = ref<boolean>(false)
const currentRoutePath = computed(() => route.path)
const matchedRoute = computed(() => route.matched.filter((r) => r.path !== '/'))

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('handleOpen', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('handleClose', key, keyPath)
}

// 开关
const collapseHandle = () => (isCollapse.value = !isCollapse.value)
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
      color: #fff;
      font-size: 25px;
      font-weight: bold;
      text-align: center;
    }
    .el-menu {
      border: 0;
      height: calc(100% - 50px);
    }
  }
  main {
    height: 100%;
    overflow: hidden;
    .top {
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .fold-btn {
        cursor: pointer;
        color: #0080ff;
        margin: 0 20px 0 10px;
      }
    }
    .wrap-app {
      padding: 10px;
      height: calc(100% - 50px);
    }
  }

  .el-menu {
    transition-duration: 0.1s;
  }
}
</style>
