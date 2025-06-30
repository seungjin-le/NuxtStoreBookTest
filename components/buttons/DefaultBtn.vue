<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    default: () => {}
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <button onclick="onClick">{{ text }}</button>
  </div>
</template>
