<template>
  <section class="right-panel">
    <el-drawer :model-value="modelValue" @close="beforeClose">
      <template #title>
        <slot name="title" />
      </template>
      <template #default><slot /></template>
      <template #footer><slot name="footer" /></template>
    </el-drawer>
  </section>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {
    modelValue: false
  }
)

// eslint-disable-next-line no-undef
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const beforeClose = () => {
  emit('update:modelValue', false)
}
</script>
