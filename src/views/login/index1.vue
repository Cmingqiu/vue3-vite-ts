<template>
  <div class="login-page">
    <div class="form-panel">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        label-width="60px"
        label-position="left"
        hide-required-asterisk
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" clearable placeholder="用户名admin" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            clearable
            show-password
            placeholder="密码123456"
            @keydown.enter="login(loginFormRef)"
          />
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="login(loginFormRef)">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

export default defineComponent({
  name: 'Login',
  setup() {
    const loginFormRef = ref<FormInstance>()
    const loginForm = reactive({
      username: '',
      password: ''
    })
    const rules = {
      username: { required: true, message: '请输入用户名' },
      password: { required: true, message: '请输入密码' }
    }
    const login = (formEle: FormInstance) => {
      if (!formEle) return
      formEle.validate((valid: boolean, fields: unknown) => {
        if (valid) {
          console.log(valid, fields)
        }
      })
    }

    return { loginFormRef, loginForm, rules, login }
  }
})
</script>

<style lang="scss" scoped></style>
