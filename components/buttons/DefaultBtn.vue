<script setup lang="ts">
const props = defineProps({
  onClick: {
    type: Function,
    default: () => {}
  },
  text: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'm'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :click="props.onClick" :disabled="props.disabled">{{ text }}</button>
</template>

<style scoped></style>
