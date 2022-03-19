<template>
  <div class="login-page">
    <div class="form-panel">
      <input id="chk" type="checkbox" aria-hidden="true" />

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
            <el-input v-model="loginForm.username" clearable placeholder="用户名admin" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              clearable
              show-password
              placeholder="密码123456"
              @keydown.enter="login(loginFormRef)"
            />
          </el-form-item>
          <button @click="login(loginFormRef)">登 录</button>
        </el-form>
      </div>

      <div class="signup">
        <!--  <form>
          <label for="chk" aria-hidden="true">注 册</label>
          <input type="text" name="txt" placeholder="用户名" />
          <input type="email" name="email" placeholder="邮箱" />
          <input type="password" name="pswd" placeholder="密码" />
          <button>注 册</button>
        </form> -->
        <label for="chk" aria-hidden="true">注 册</label>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          label-position="left"
          hide-required-asterisk
          :rules="rules"
        >
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" clearable placeholder="用户名admin" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              clearable
              show-password
              placeholder="密码123456"
              @keydown.enter="login(loginFormRef)"
            />
          </el-form-item>
          <button @click="login(loginFormRef)">注 册</button>
        </el-form>
      </div>
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
