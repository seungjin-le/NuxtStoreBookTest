<script setup lang="ts">
import { computed } from 'vue'

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
  },
  color: {
    type: String,
    default: ''
  }
})

const size = computed(() => '')
const color = computed(() => props.color)
</script>

<template>
  <button :click="onClick" :disabled="disabled">{{ text }}</button>
</template>
