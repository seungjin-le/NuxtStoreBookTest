<script setup>
const value = defineModel({ type: 'string', default: '', name: 'value', required: false })
</script>

<template>
  <div class="flex-col-start">
    <input v-model="value" />
  </div>
</template>
