<template>
  <section>
    <div>document</div>
    <HelloWorld msg="Hello" />
  </section>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Document',
  components: { HelloWorld },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
