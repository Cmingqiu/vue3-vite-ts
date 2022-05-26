<template>
  <RightPanel v-model="drawerVisible" class="right-control-panel">
    <div class="configure-title">主题</div>
    <div class="theme-configure">
      <el-switch
        v-model="themeSwitchValue"
        active-color="#C0CCDA"
        inactive-color="#000"
        inline-prompt
        active-value="light"
        inactive-value="dark"
        :active-icon="Sunny"
        :inactive-icon="Moon"
      />
    </div>

    <span class="configure-title">其他设置</span>
    <div class="other-configure">
      <div v-for="(config, i) in otherConfigs" :key="i" class="other-configure-item">
        {{ config.title }}
        <el-switch v-model="config.value" :active-color="variables.menuBg" />
      </div>
    </div>
  </RightPanel>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import RightPanel from '@/components/RightPanel.vue'
import variables from '@/styles/variable.module.scss'
import useControlDrawer from './useControlDrawer'
import { useControlStore } from '@/store/useControlStore'

const { showLogo, showTag, showFullscreen } = useControlDrawer()
const drawerVisible = ref<boolean>(false) //右侧设置弹框
const otherConfigs = reactive([
  { title: '显示logo', value: showLogo },
  { title: '显示tag栏', value: showTag },
  { title: '显示全屏按钮', value: showFullscreen }
])
const controlStore = useControlStore()
const changeTheme = () => {
  controlStore.switchTheme(controlStore.theme === 'light' ? 'dark' : 'light')
}

const themeSwitchValue = computed({
  get: () => controlStore.theme,
  set: changeTheme
})

// 暴露子组件的变量
defineExpose({ drawerVisible })
</script>
