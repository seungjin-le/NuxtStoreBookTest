<script setup>
const value = defineModel({ type: 'string', default: '', name: 'value', required: false })

const test = ref('')
</script>

<template>
  <div class="flex-col-start">
    <input v-model="value" />
  </div>
</template>
