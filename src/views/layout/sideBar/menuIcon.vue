<template>
  <el-icon v-if="icon && isElIcon"> <component :is="elIconName" /> </el-icon>
  <SvgIcon v-if="icon && !isElIcon" class="menu-icon" :icon-class="icon" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = withDefaults(defineProps<{ icon: string | undefined | any }>(), { icon: '' })
// 如果是Element-Plus的icon则菜单图标以el-icon-开头
const isElIcon = computed(() => props.icon?.startsWith('el-icon'))
const elIconName = props.icon?.split('el-icon-')[1]
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
