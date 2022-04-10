<template>
  <div class="h5input">
    <ul class="code-input">
      <li v-for="num in 8" :key="num" class="code-input-item">{{ codes[num] }}</li>
    </ul>
    <input v-model="codes" type="text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const codes = ref<string>('12346578')
</script>

<style lang="scss" scoped>
.code-input {
  display: flex;
  &-item {
    width: 40px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 2px solid #ccc;
    margin: 10px;
    color: #333;
    font-weight: bold;
  }
}
</style>
