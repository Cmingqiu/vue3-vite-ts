<template>
  <div class="avatar">
    <el-dropdown>
      <el-avatar :src="avatarSrc"></el-avatar>
      <template #dropdown>
        <el-dropdown-item> <router-link to="/">首页</router-link> </el-dropdown-item>
        <el-dropdown-item divided @click="loginOut">退出登录</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginOut = () => {
  //TODO 清除storage中的用户信息和路由
  localStorage.removeItem('token')
  localStorage.removeItem('routesStorage')
  router.push('/login')
}
const avatarSrc = computed(() => `${import.meta.env.BASE_URL}logo.png`)
</script>

<style lang="scss" scoped></style>
