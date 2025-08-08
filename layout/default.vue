<script setup>
import { computed, ref } from 'vue'

defineProps({})

const test = ref('')

const test2 = computed(() => test.value)
</script>

<template>
  <div class="text-red">
    <slot />
  </div>
</template>
