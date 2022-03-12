<template>
  <div>document</div>
  <HelloWorld msg="Hello" />
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'DashBoard',
  components: { HelloWorld },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
