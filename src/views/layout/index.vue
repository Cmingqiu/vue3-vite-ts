<template>
  <div class="layout">
    <!-- aside -->
    <SideBar />
    <!-- main -->
    <main>
      <NavBar />
      <TagBar v-show="showTag" />
      <div class="app-main" :style="{ height: `calc(100% - ${showTag ? '90px' : '50px'})` }">
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
import useControlDrawer from '@/views/layout/navBar/useControlDrawer'

const router = useRoute()
const { showTag } = useControlDrawer()

const indexStore = useIndexStore()
const key = computed(() => router.path)
const cacheViewList = computed(() => indexStore.cacheViewList)
</script>
