<script setup lang="ts">
const value = defineModel({ type: String, default: '', name: 'value', required: false })
</script>

<template><input v-model="value" /></template>
