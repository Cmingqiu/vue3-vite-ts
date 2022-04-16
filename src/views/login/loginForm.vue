<template>
  <div class="login">
    <label for="chk" aria-hidden="true">登 录</label>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      label-position="left"
      hide-required-asterisk
      :rules="rules"
    >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" clearable placeholder="用户名admin">
          <template #prefix>
            <el-icon size="18px"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          clearable
          show-password
          placeholder="密码123456"
        >
          <template #prefix>
            <el-icon size="18px"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <button @click.prevent="login(loginFormRef)">登 录</button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginFormRef = ref()
const loginForm = reactive({
  username: '',
  password: ''
})
const rules = {
  username: { required: true, message: '请输入用户名' },
  password: { required: true, message: '请输入密码' }
}
const login = (formEle: any) => {
  if (!formEle) return
  formEle.validate((valid: boolean, fields: unknown) => {
    if (valid) {
      router.push('/')
    } else {
    }
  })
}
</script>
