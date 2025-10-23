<script setup lang="ts">
defineProps({
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
  <button :click="onClick" :disabled="disabled">{{ text }}</button>
</template>
