<template>
  <div>
    <SvgIcon class-name="not-found" icon-class="404" :color="mainColor" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import variable from '@/styles/variable.module.scss'

export default defineComponent({
  name: 'NotFound',
  setup() {
    const mainColor = computed(() => variable.menuBg)
    return {
      mainColor
    }
  }
})
</script>

<style lang="scss">
.not-found {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px !important;
  height: 100px !important;
}
</style>
