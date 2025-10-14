<script setup>
import { useForm } from 'vee-validate'
import DefaultBtn from 'components/buttons/DefaultBtn.vue'
</script>

<template>
  <div
    class="bg-[gray] size-full min-h-screen flex-col-center-start [&_input]:border-1 [&_input]:border-[blue] flex-col-center gap-[20px]"
  >
    <DefaultBtn v-bind="{ text: 'test', onClick: () => console.log('test') }" />
  </div>
</template>
