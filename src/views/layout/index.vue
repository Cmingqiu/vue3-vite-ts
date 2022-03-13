<template>
  <div class="layout">
    <!-- aside -->
    <SideBar />
    <!-- main -->
    <main>
      <NavBar />
      <div class="app-main">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="key" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 按需引入
// import { Grid, Fold, Expand, Setting } from '@element-plus/icons-vue'
import SideBar from './sideBar.vue'
import NavBar from './navBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const key = computed(() => router.path)
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
