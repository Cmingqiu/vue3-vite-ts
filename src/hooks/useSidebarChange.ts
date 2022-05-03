/**
 * 监听页面宽度变化，小于800px就隐藏sidebar,小于800px显示出来
 */

import { useLayoutStore } from '@/store/useLayoutStore'
import { onMounted, onUnmounted } from 'vue'

export const useSidebarChange = () => {
  const windowResize = () => {
    const dWidth = document.documentElement.clientWidth
    const layoutStore = useLayoutStore()
    if (dWidth <= 1_000) {
      layoutStore.isCollapse = true
    }
  }

  onMounted(() => {
    window.addEventListener('resize', windowResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', windowResize)
  })
}
