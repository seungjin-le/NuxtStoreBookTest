import { reactive, toRefs } from 'vue'

export function useForm(schema) {
  return function useForm() {
    const state = reactive({
      values: {},
      errors: {}
    })

    function defineField(name) {
      return [
        state.values[name] || '',
        {
          value: state.values[name] || '',
          onInput: (e) => {
            state.values[name] = e.target.value
            state.errors[name] = ''
          }
        }
      ]
    }

    function handleSubmit(onSuccess, onError) {
      return () => {
        const result = schema.safeParse ? schema.safeParse(state.values) : { success: true, data: state.values }
        if (result.success) {
          state.errors = {}
          onSuccess(result.data)
        } else {
          const formatted = {}
          result.error.errors.forEach((e) => {
            formatted[e.path[0]] = e.message
          })
          state.errors = formatted
          onError(state.errors)
        }
      }
    }

    return { ...toRefs(state), defineField, handleSubmit }
  }
}
