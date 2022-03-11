import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import { defineStore } from 'pinia'

const store = createPinia()
store.use(piniaPluginPersist)
export default (app: any) => {
  app.use(store)
}

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
