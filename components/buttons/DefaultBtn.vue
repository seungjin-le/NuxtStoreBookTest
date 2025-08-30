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
  <button v-on:click="onClick">{{ text }}</button>
</template>
