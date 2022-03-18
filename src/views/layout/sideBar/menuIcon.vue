<template>
  <el-icon v-if="menu.icon && isElIcon"> <component :is="elIconName" /> </el-icon>
  <SvgIcon v-if="menu.icon && !isElIcon" class="menu-icon" :icon-class="menu.icon" />
</template>

<script lang="ts" setup>
import { IMenuItem } from '@/assets/menu'
import { computed } from 'vue'
const props = defineProps<{ menu: IMenuItem }>()
// 如果是Element-Plus的icon则菜单图标以el-icon-开头
const isElIcon = computed(() => props.menu.icon && props.menu.icon.startsWith('el-icon'))
const elIconName = props.menu.icon?.split('el-icon-')[1]
</script>

<style lang="scss">
.menu-icon {
  margin-left: 3px;
  margin-right: 8px;
  width: 16px !important;
  height: 16px !important;
  text-align: center;
}
</style>
