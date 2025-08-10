<script setup>
import { ref } from 'vue'

const test = ref('')
const inputVal = ref('')
</script>

<template>
  <div>
    <input v-model="test" type="text" />
  </div>
</template>
