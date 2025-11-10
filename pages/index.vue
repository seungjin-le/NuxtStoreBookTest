<script setup>
const id = ref('')
const pw = ref('')
</script>

<template>
  <div>
    <input v-model="id" type="text" />
    <input type="password" />
  </div>
</template>
