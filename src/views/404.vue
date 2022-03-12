<template>
  <SvgIcon class-name="not-found" icon-class="404" color="red" />
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.not-found {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px !important;
  height: 100px !important;
}
</style>
