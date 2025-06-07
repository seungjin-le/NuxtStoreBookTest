<script setup>
defineProps({

  onClick: {
    type: Function,
    required: false,
    default: () => {}
  }
})

const value = model('text', {
  type: String,
  default: '저장'
})

</script>

<template>
  <button class="bg-[red]" @click.stop="onClick">{{ value }}</button>
</template>
