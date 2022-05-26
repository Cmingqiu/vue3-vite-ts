/**
 * 控制栏开关控制页面布局，使用localStorage缓存
 */

import { defineStore } from 'pinia'
import { store } from '.'

interface IControlState {
  showTag: boolean //是否显示tag栏
  showLogo: boolean //是否显示logo
  showFullscreen: boolean //是否显示全屏按钮
  theme: ITheme //主题类型
}

export const useControlStore = defineStore('control', {
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  },
  state: () => {
    const state: IControlState = {
      showTag: false,
      showLogo: false,
      showFullscreen: false,
      theme: 'light'
    }
    return state
  },
  actions: {
    change(key: keyof IControlState, value: boolean) {
      this[key] = value
    },
    // 切换主题色
    switchTheme(themeType: ITheme) {
      this.theme = themeType
      document.documentElement.setAttribute('data-theme', themeType)
    }
  }
})

export const useControlStoreWithOut = () => useControlStore(store)
