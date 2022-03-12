<template>
  <el-button @click="alertMessage">alert</el-button>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'DashBoard',
  setup() {
    const { proxy } = getCurrentInstance()
    function alertMessage() {
      proxy?.$message.success('恭喜你，这是一条成功消息')
    }
    return { alertMessage }
  }
}
</script>

<style lang="scss" scoped></style>
