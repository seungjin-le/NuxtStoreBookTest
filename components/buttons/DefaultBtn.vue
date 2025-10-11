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
  }
})
</script>

<template>
  <button :click="props.onClick">{{ text }}</button>
</template>

<style scoped></style>
