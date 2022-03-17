<template>
  <div class="avatar">
    <el-dropdown>
      <img src="/public/logo.png" alt="" srcset="" />
      <template #dropdown>
        <el-dropdown-item> <router-link to="/">首页</router-link> </el-dropdown-item>
        <el-dropdown-item divided @click="loginOut">退出登录</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
const loginOut = () => {
  console.log('loginOut')
}
</script>

<style lang="scss" scoped></style>
