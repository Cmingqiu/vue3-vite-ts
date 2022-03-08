<template>
  <h1>Hello World</h1>
  <div>msg : {{ msg }}</div>
  <div>user : {{ user }}</div>
  <hr>
  <div>useStore:</div>
  <div>count:{{ indexStore.count }}</div>
  <div>double count:{{ indexStore.doubleCount }}</div>
  <button @click="increase">
    +
  </button>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { getUser, login } from '@/api/request'
import { ILoginParams } from '@/typings/login'
import { useIndexStore } from '@/store'

defineProps<{
  msg: string
}>()

const user = ref<string>('')
const indexStore = useIndexStore()
function Login() {
  const loginParams: ILoginParams = {
    username: 'username',
    password: 'password'
  }
  login(loginParams)
    .then( )
    .catch( )
}
function increase() {
  // indexStore.count+=2
  /* indexStore.$patch({
    count: indexStore.count+1
  }) */
  indexStore.increase(3)
}

onBeforeMount(async () => {
  const res = await getUser()
  user.value = res as any as string

  Login()
})
</script>

<style scoped lang="scss"></style>
