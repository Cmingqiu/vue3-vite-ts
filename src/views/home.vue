<template>
  <section>
    <el-button @click="alertMessage">alert</el-button>
    <el-input v-model="inputValue" @input="changeHandle"></el-input>
  </section>
</template>

<script lang="ts">
import { ComponentInternalInstance, defineComponent, getCurrentInstance, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const inputValue = ref<string>('')
    function alertMessage(): void {
      proxy?.$message.success(inputValue.value)
    }
    const changeHandle = (value: string | number) => {}
    return { alertMessage, inputValue, changeHandle }
  }
})
</script>

<style lang="scss" scoped></style>
