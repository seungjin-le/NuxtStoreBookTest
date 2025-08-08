<script setup>
import { useForm } from 'vee-validate'
import DefaultBtn from 'components/buttons/DefaultBtn.vue'

const { values, defineField, handleSubmit } = useForm({
  text1: z.string().min(1),
  text2: z.string().optional(),
  text3: z.string().optional()
})

const [text1, text1Attrs] = defineField('text1')
const [text2, text2Attrs] = defineField('text2')
const [text3, text3Attrs] = defineField('text3')

const handleOnLogin = async () => {}

const ovj = {
  text: 'asdfasdf',
  onClick: () =>
    handleSubmit(
      (success) => console.log(success),
      (err) => console.log(err, 'asdfaf')
    )()
}

watch(
  () => values,
  () => console.log(values),
  { deep: true }
)
</script>

<template>
  <div
    class="bg-[gray] size-full min-h-screen [&_input]:border-1 [&_input]:border-[blue] flex-col-center gap-[20px]"
  >
    <input type="text" v-model="text1" v-bind="text1Attrs" />
    <input type="text" v-model="text2" v-bind="text2Attrs" />
    <input type="text" v-model="text3" v-bind="text3Attrs" />

    <DefaultBtn v-bind="ovj" />

    <button
      class="size-[40px] border-1 border-[red] rounded-[10px]"
      @click="
        () => {
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
