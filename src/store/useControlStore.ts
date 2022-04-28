/**
 * 控制栏开关控制页面布局，使用localStorage缓存
 */

import { defineStore } from 'pinia'
import { store } from '.'

interface IControlState {
  showTag: boolean //是否显示tag栏
  showLogo: boolean //是否显示logo
  showFullscreen: boolean //是否显示全屏按钮
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
      showFullscreen: false
    }
    return state
  },
  actions: {
    change(key: keyof IControlState, value: boolean) {
      this[key] = value
    }
  }
})

export const useControlStoreWithOut = () => useControlStore(store)
