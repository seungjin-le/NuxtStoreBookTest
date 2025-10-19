<script setup>
import DefaultBtn from 'components/buttons/DefaultBtn.vue'
</script>

<template>
  <div class="">
    <input type="text" />
    <input type="password" />
    <DefaultBtn v-bind="{ text: 'test', onClick: () => console.log('test') }" />
  </div>
</template>
