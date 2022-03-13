<template>
  <!-- 有子菜单 -->
  <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
    <template #title>
      <el-icon> <component :is="menu.icon" /> </el-icon>
      <span>{{ menu.name }}</span>
    </template>

    <SideBarItem v-for="childMenu in menu.children" :key="childMenu.name" :menu="childMenu" />
  </el-sub-menu>

  <!-- 没有子级菜单 -->
  <el-menu-item v-else :index="menu.path">
    <el-icon> <component :is="menu.icon" /> </el-icon>
    <template #title>
      <a href="">{{ menu.name }}</a>
      <!-- <sideBarItemLink :to="menu.path">{{ menu.name }} </sideBarItemLink> -->
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
  }
  // setup(props) {}
})
</script>
