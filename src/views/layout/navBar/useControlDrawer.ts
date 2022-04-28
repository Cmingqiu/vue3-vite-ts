import { useControlStore } from '@/store/useControlStore'
import { computed } from 'vue'

export default function () {
  const controlStore = useControlStore()
  const showLogo = computed({
    get: () => controlStore.showLogo,
    set: (val) => controlStore.change('showLogo', val)
  })
  const showTag = computed({
    get: () => controlStore.showTag,
    set: (val) => controlStore.change('showTag', val)
  })
  const showFullscreen = computed({
    get: () => controlStore.showFullscreen,
    set: (val) => controlStore.change('showFullscreen', val)
  })

  return { showLogo, showTag, showFullscreen }
}
