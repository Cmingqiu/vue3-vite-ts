import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
  id: 'index',
  persist: { enabled: true },
  state: () => ({
    count: 0,
    isCollapse: false, //侧边栏收缩开关
    cacheViewList: [] //页面缓存列表
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
    },
    addCacheViewList(meta: IRouteMeta) {},
    removeCacheViewList(meta: IRouteMeta) {}
  }
})
