<template>
  <div class="tag-bar">
    <ScrollPanelVue>
      <router-link
        v-for="tag in tagStore.tagList"
        :key="tag.path"
        v-slot="{ navigate }"
        custom
        :to="{ path: tag.path, query: tag.query }"
      >
        <span :class="['tag-bar-item', route.path === tag.path && 'active']" @click="navigate">
          {{ tag.name }}
          <el-icon v-show="!isHome(tag.path)" @click.stop="handleClick(tag)"><close /></el-icon>
        </span>
      </router-link>
    </ScrollPanelVue>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTagStore } from '@/store/useTagStore'
import ScrollPanelVue from './scrollPanel.vue'

const route = useRoute()
const tagStore = useTagStore()
const isHome = (path: string) => path === '/home'

const addTag = () => {
  const { path, meta, query } = route
  tagStore.addTag({
    name: meta.title as string,
    path,
    meta,
    query
  })
}
const handleClick = (tag: ITag) => {
  tagStore.removeTag(tag)
}
// 监听路由变化，添加标签
watch(
  () => route.path,
  () => addTag(),
  { immediate: true }
)
</script>
