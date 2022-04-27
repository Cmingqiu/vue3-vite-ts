<template>
  <!-- 没有子级菜单 -->
  <template v-if="theOnlyOneChildRoute && !theOnlyOneChildRoute.meta?.hidden">
    <el-menu-item :index="resolvePath(theOnlyOneChildRoute.path)">
      <MenuIcon :icon="theOnlyOneChildRoute.meta?.icon" />
      <template #title>
        <sideBarItemLink :to="resolvePath(theOnlyOneChildRoute.path)">
          {{ theOnlyOneChildRoute?.meta?.title }}
        </sideBarItemLink>
      </template>
    </el-menu-item>
  </template>
  <!-- 有子菜单 -->
  <template v-if="!theOnlyOneChildRoute && !menu.meta?.hidden">
    <el-sub-menu :index="menu.path">
      <template #title>
        <MenuIcon :icon="menu.meta?.icon" />
        <span>{{ menu.meta?.title }}</span>
      </template>

      <SideBarItem
        v-for="childMenu in menu.children"
        :key="childMenu.name"
        :base-path="resolvePath(childMenu.path)"
        :menu="childMenu"
      />
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import sideBarItemLink from './sideBarItemLink.vue'
import MenuIcon from './menuIcon.vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'SideBarItem',
  components: { sideBarItemLink, MenuIcon },
  props: {
    menu: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    },
    // 父路由路径（子路由路径如果是相对的 要基于父路径）
    basePath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { menu } = toRefs(props)
    // 渲染菜单主要先看子路由
    // 比如我们的路由 一级路由一般都是layout组件 二级路由才是我们考虑要渲染成菜单的
    // 要渲染的单个路由 如果该路由只有一个子路由 默认直接渲染这个子路由
    // 只有一个子路由直接通过el-menu-item组件来渲染
    // 多个children时 直接return null 多children需要用el-submenu来渲染并递归

    // 子路由数量
    const childrenLen = computed(() => {
      const children = (menu.value.children || []).filter((child) => !child.meta?.hidden)
      return children.length
    })

    // 该路由只有一个子路由
    const theOnlyOneChildRoute = computed(() => {
      // 多个children时 直接return null 多children需要用el-submenu来渲染并递归
      if (childrenLen.value > 1) {
        return null
      }
      // 只有一个子路由 还要筛选路由meta里有无hidden属性 hidden：true则过滤出去 不用管
      // 路由meta里我们会配置hidden属性表示不渲染成菜单，比如login 401 404页面是不渲染成菜单的
      if (menu.value.children) {
        for (const child of menu.value.children) {
          if (!child.meta?.hidden) {
            return child
          }
        }
      }
      // childrenLen === 0 无可渲染的子路由 （可能有子路由 hidden属性为true）
      // 无可渲染children时 把当前路由item作为仅有的子路由渲染
      return {
        ...props.menu,
        path: '' //避免重复拼接路径
      }
    })

    // 利用resolvePath根据父路径+子路径 解析成正确路径 子路径可能是相对的
    // 如果没有嵌套children，按照当前路由的path，无需拼接
    const resolvePath = (childPath: string) => {
      return props.basePath + (props.basePath === '/' ? '' : '/') + childPath
    }

    return {
      childrenLen,
      resolvePath,
      theOnlyOneChildRoute
    }
  }
})
</script>
