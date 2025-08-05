<script setup>
const { values } = useForm({
  validationSchema: yup.object({
    text1: yup.string(),
    text3: yup.string()
  })
})
</script>

<template>
  <div>
    <input type="text" />
    <button>test</button>
  </div>
</template>
