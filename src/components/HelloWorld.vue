<template>
  <h1>Hello World</h1>
  <div>msg : {{ msg }}</div>
  <div>user : {{ user }}</div>
  <hr />
  <div>useStore:</div>
  <div>count:{{ layoutStore.count }}</div>
  <div>double count:{{ layoutStore.doubleCount }}</div>
  <button @click="increase">+</button>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { getUser } from '@/api/request'
import { useLayoutStore } from '@/store/useLayoutStore'

// eslint-disable-next-line no-undef
withDefaults(defineProps<{ msg: string }>(), {
  msg: ''
})

const user = ref<string>('')
const layoutStore = useLayoutStore()
function increase() {
  // layoutStore.count+=2
  /* layoutStore.$patch({
    count: layoutStore.count+1
  }) */
  layoutStore.increase(3)
}

onBeforeMount(async () => {
  const res = await getUser()
  user.value = res as any as string
})
</script>

<style scoped lang="scss"></style>
