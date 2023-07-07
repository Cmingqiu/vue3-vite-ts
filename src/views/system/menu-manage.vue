<template>
  <div>
    <div v-for="item in list" :key="item" :ref="itemRefs">{{ item }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ComponentPublicInstance } from 'vue'

const list = new Array(10).fill(0).map((v, i) => i + 1)
const refs = reactive<(HTMLElement | ComponentPublicInstance | null)[]>([])

const itemRefs = (el: HTMLElement | ComponentPublicInstance | null) => {
  refs.push(el)
}

onMounted(() => {
  setTimeout(() => {
    console.log(refs)
  }, 3000)
})
</script>

<!-- <script>
export default {
  name: 'MenuManage'
}
</script> -->

<style lang="scss" scoped></style>
