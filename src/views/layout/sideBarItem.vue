<template>
  <!-- 有子菜单 -->
  <el-sub-menu v-if="hasChildren && !menu.hidden" :index="menu.path">
    <template #title>
      <el-icon> <component :is="menu.icon" /> </el-icon>
      <span>{{ menu.name }}</span>
    </template>

    <SideBarItem v-for="childMenu in menu.children" :key="childMenu.name" :menu="childMenu" />
  </el-sub-menu>

  <!-- 没有子级菜单 -->
  <el-menu-item v-if="!hasChildren && !menu.hidden" :index="menu.path">
    <el-icon> <component :is="menu.icon" /> </el-icon>
    <template #title>
      <sideBarItemLink :to="menu.path">{{ menu.name }} </sideBarItemLink>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import sideBarItemLink from './sideBarItemLink.vue'
import { IMenuItem } from '@/assets/menu'

export default defineComponent({
  name: 'SideBarItem',
  components: { sideBarItemLink },
  props: {
    menu: {
      type: Object as PropType<IMenuItem>,
      required: true
    }
  },
  setup(props) {
    const { menu } = toRefs(props)
    const hasChildren = computed(() => menu.value.children && menu.value.children.length > 0)

    return {
      hasChildren
    }
  }
})
</script>
