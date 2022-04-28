import { defineStore } from 'pinia'
import router from '@/router'
import { store } from '.'

export const useTagStore = defineStore({
  id: 'tag',
  persist: { enabled: true },
  state: () => {
    const state: ITagStoreState = {
      tagList: []
    }
    return state
  },
  actions: {
    // 添加标签
    addTag(tag: ITag) {
      const isExist = this.tagList.find((t) => t.path === tag.path)
      if (!isExist) this.tagList.push(tag)
    },
    // 删除标签
    // 如果删除的是激活的标签，就激活前面一个标签
    // 如果tagList为空，则跳转到/dashboard
    removeTag(tag: ITag) {
      const i = this.tagList.findIndex((t) => t.path === tag.path)
      this.tagList.splice(i, 1)
      const totalLen = this.tagList.length
      if (totalLen > 0) {
        if (tag.path === router.currentRoute.value.path) {
          router.push(this.tagList[i > 0 ? i - 1 : 0].path)
        }
      } else if (totalLen === 0) {
        this.tagList = [{ name: 'dashboard', path: '/dashboard' }]
        router.push('/')
      }
    }
  }
})

// Need to be used outside the setup
export function useTagStoreWithOut() {
  return useTagStore(store)
}
