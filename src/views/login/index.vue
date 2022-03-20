<template>
  <div class="login-page">
    <div class="form-panel">
      <input id="chk" type="checkbox" aria-hidden="true" />
      <LoginForm />
      <SignupForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from './loginForm.vue'
import SignupForm from './signupForm.vue'

export default defineComponent({
  name: 'Login',
  components: { LoginForm, SignupForm }
})
</script>
