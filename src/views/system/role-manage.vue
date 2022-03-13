<template>
  <div>
    role-manage
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  // name: 'DashBoard',
  setup() {
    const msg = computed(() => 'message')
    return { msg }
  }
})
</script>

<style lang="scss" scoped></style>
