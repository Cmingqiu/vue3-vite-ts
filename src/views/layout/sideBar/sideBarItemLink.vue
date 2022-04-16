<!--   
  针对路径是外链 就渲染为a标签 如果是正常路由路径 就渲染为 router-link
  el-menu组件的router属性去掉了  不开启路由模式
-->
<template>
  <component :is="component" style="flex: 1" v-bind="bindAttrs"> <slot></slot> </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'SideBarItemLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const toPath = /https?:|mailto:|tel:/.test(props.to) ? props.to.slice(1) : props.to
    const isExternalLink = computed(() => isExternal(toPath))
    const component = computed(() => (isExternalLink.value ? 'a' : 'router-link'))
    const bindAttrs = computed(() =>
      isExternalLink.value ? { href: toPath, target: '_blank', rel: 'noopener' } : { to: toPath }
    )

    return {
      component,
      bindAttrs
    }
  }
})
</script>
