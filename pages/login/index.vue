<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { values, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    text1: yup.string(),
    text2: yup.string(),
    text3: yup.string()
  })
})

const [text1, text1Attrs] = defineField('text1')
const [text2, text2Attrs] = defineField('text2')
const [text3, text3Attrs] = defineField('text3')
</script>

<template>
  <div
    class="bg-[gray] size-full min-h-screen [&_input]:border-1 [&_input]:border-[blue] flex-col-center gap-[20px]"
  >
    <input type="text" v-model="text1" v-bind="text1Attrs" />
    {{ text1 }}
    <input type="text" v-model="text2" v-bind="text2Attrs" />
    <input type="text" v-model="text3" v-bind="text3Attrs" />
    <button
      class="size-[40px] border-1 border-[red] rounded-[10px]"
      @click="
        () => {
          console.log('asdfasdf')

          handleSubmit(
            (success) => console.log(success),
            (err) => console.log(err)
          )((a) => console.log(a))
        }
      "
    >
      test
    </button>
  </div>
</template>
