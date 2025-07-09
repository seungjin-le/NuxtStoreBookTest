<script setup>
const test = ref('')
const inputVal = ref('')
</script>

<template>
  <div>
    <input v-model="test" type="text" />
    <input v-model="inputVal" type="text" />
  </div>
</template>
