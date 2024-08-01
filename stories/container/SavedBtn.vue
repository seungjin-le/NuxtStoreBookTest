<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: '저장'
  },
  onClick: {
    type: Function,
    required: false,
    default: () => {}
  }
})
</script>

<template>
  <button class="bg-[red]" @click.stop="onClick">{{ text }}</button>
</template>
