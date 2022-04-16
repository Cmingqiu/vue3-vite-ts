<template>
  <div class="signup">
    <label for="chk" aria-hidden="true">注 册</label>
    <el-form
      ref="signupFormRef"
      :model="signupForm"
      label-position="left"
      hide-required-asterisk
      :rules="rules"
    >
      <el-form-item prop="username">
        <el-input v-model="signupForm.username" clearable placeholder="请输入用户名">
          <template #prefix>
            <el-icon size="18px"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signupForm.password"
          type="password"
          clearable
          show-password
          placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon size="18px"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwdConfirm">
        <el-input
          v-model="signupForm.pwdConfirm"
          type="password"
          clearable
          show-password
          placeholder="请再次输入密码"
        >
          <template #prefix>
            <el-icon size="18px"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <button @click.prevent="login(signupFormRef)">注 册</button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const signupFormRef = ref()
const signupForm = reactive({
  username: '',
  password: '',
  pwdConfirm: ''
})
const rules = {
  username: { required: true, message: '请输入用户名' },
  password: { required: true, message: '请输入密码' },
  pwdConfirm: {
    validator: (rule: unknown, value: string, callback: any) => {
      if (value.trim() === '') {
        callback('请再次输入密码')
      } else if (value !== signupForm.password) {
        return false
      } else {
        callback()
      }
    },
    message: '请输入相同密码',
    trigger: 'change'
  }
}
const login = (formEle: any) => {
  if (!formEle) return
  formEle.validate((valid: boolean, fields: unknown) => {
    if (valid) {
    } else {
    }
  })
}
</script>
