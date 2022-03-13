<template>
  <section>
    <SvgIcon v-for="svg in svgs" :key="svg" class="svg" :icon-class="svg" color="green" />
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Svg',
  setup() {
    const svgs = reactive<Array<string>>([])
    const svgFiles = import.meta.globEager('../icons/svg/**.svg')
    Object.keys(svgFiles).forEach((svg) => {
      svgs.push(svg.match(/^\.\.\/icons\/svg\/(.*).svg$/)![1])
    })
    return { svgs }
  }
})
</script>

<style lang="scss" scoped>
:deep(.svg) {
  margin: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    transition: transform 0.3s;
  }
}
</style>
