<template>
  <div class="w-full">
    <h3 class="text-3xl font-gray-800 mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
    <AppButton>Read full article</AppButton>
  </div>
</template>

<script>
// import { reactive, onMounted } from '@vue/composition-api'
import AppButton from './AppButton'

export default {
  components: {
    AppButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>
