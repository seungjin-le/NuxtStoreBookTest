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
  <div class="">
    <button v-on:click="onClick">{{ text }}</button>
  </div>
</template>
