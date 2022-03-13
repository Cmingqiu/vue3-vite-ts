import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
  id: 'index',
  persist: { enabled: true },
  state: () => ({
    count: 0,
    isCollapse: false
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    increase(payload: number) {
      this.count += payload
    },
    // layout 侧边栏开关
    collapseHandle(flag: boolean) {
      this.isCollapse = flag
    }
  }
})
