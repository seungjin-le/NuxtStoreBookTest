<script setup lang="ts">
import { computed } from 'vue'

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

const size = computed(() => '')
</script>

<template>
  <button :click="onClick" :disabled="disabled">{{ text }}</button>
</template>
