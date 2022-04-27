/**
 * 监听页面宽度变化，小于800px就隐藏sidebar,小于800px显示出来
 */

import { useIndexStore } from '@/store/useIndexStore'
import { onMounted, onUnmounted } from 'vue'

export const sidebarChange = () => {
  const windowResize = () => {
    const dWidth = document.documentElement.clientWidth
    const indexStore = useIndexStore()
    if (dWidth <= 1_000) {
      indexStore.isCollapse = true
    } else {
      indexStore.isCollapse = false
    }
  }

  onMounted(() => {
    window.addEventListener('resize', windowResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', windowResize)
  })
}
