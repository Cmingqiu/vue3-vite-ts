<template>
  <div>
    home
    <HelloWorld msg="Hello" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
