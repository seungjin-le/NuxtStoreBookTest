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
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  }
})

const size = computed(() => '')
const color = computed(() => props.color)
</script>

<template>
  <button :click="onClick" :disabled="disabled" class="outline-0 focus:outline-0">{{ text }}</button>
</template>
