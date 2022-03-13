<template>
  <section>
    <el-button @click="alertMessage">alert</el-button>
    <el-input v-model="inputValue"></el-input>
  </section>
</template>

<script lang="ts">
import { ComponentInternalInstance, defineComponent, getCurrentInstance, ref } from 'vue'

export default defineComponent({
  name: 'DashBoard',
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const inputValue = ref<string>('')
    function alertMessage(): void {
      proxy?.$message.success(inputValue.value)
    }
    return { alertMessage, inputValue }
  }
})
</script>

<style lang="scss" scoped></style>
