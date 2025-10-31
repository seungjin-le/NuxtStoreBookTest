<script setup lang="ts">
const value = defineModel({ type: String, default: '', name: 'value', required: false })
</script>

<template>
  <div class="flex-col-start">
    <input v-model="value" />
  </div>
</template>
