<template>
  <div class="layout">
    <!-- aside -->
    <SideBar />
    <!-- main -->
    <main>
      <NavBar />
      <TagBar />
      <div class="app-main">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cacheViewList">
              <component :is="Component" :key="key" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useIndexStore } from '@/store/useIndexStore'
// 按需引入
// import { Grid, Fold, Expand, Setting } from '@element-plus/icons-vue'
import SideBar from './sideBar/index.vue'
import NavBar from './navBar/index.vue'
import TagBar from './tagBar/index.vue'

const router = useRoute()

const indexStore = useIndexStore()
const key = computed(() => router.path)
const cacheViewList = computed(() => indexStore.cacheViewList)
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
      overflow: auto;
      height: calc(100% - 90px);
    }
  }
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
