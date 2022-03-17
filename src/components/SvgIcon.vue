<template>
  <!-- 如果iconClass是带协议的图标链接 则通过style属性方式渲染-->
  <div
    v-if="isExt"
    class="svg-icon svg-external-icon"
    :style="styleExternalIcon"
    v-bind="$attrs"
  ></div>
  <!-- SVG icon 通过名称使用 -->
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <!-- 
       SVG中的use元素可以调用其他SVG文件的元素，<use xlink:href="#symbolId"></use>
    -->
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    //svg图标名称
    iconClass: {
      type: String,
      required: true
    },
    //自定义类名
    className: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  setup(props) {
    // 是否是带协议的图片链接
    const isExt = computed(() => isExternal(props.iconClass))
    // 如果iconClass是带协议的图标链接 则通过style css属性方式渲染
    const styleExternalIcon = computed(() => ({
      mask: `url(${props.iconClass}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
    }))

    // 拼接成symbolId 在loader配置中指定了symbolId格式 icon-图标名称
    const iconName = computed(() => `#icon-${props.iconClass}`)
    // 添加类名 props.className外部传入自定义类名
    const svgClass = computed(() => (props.className ? `${props.className} svg-icon` : 'svg-icon'))

    return { isExt, styleExternalIcon, iconName, svgClass }
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  color: inherit;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
