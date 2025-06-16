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
  <div>
    
  </div>
</template>
