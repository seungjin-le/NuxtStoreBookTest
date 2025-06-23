<script setup>

const test  = ref('')
</script>

<template>
 <div>
  {{test}}
  <input v-model="test" type="text">
 </div>
</template>
