<template>
  <div class="avatar">
    <el-dropdown>
      <el-avatar src="/public/logo.png"></el-avatar>

      <template #dropdown>
        <el-dropdown-item> <router-link to="/">首页</router-link> </el-dropdown-item>
        <el-dropdown-item divided @click="loginOut">退出登录</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const loginOut = () => {
  //TODO 清除storage中的用户信息
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>
