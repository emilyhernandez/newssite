<template>
  <article class="px-2 py-2 w-full flex flex-row justify-between">
    <div class="flex flex-col">
      <h3 class="text-lg md:text-3xl font-gray-800 mb-3 break-word leading-tight">
        <b>{{ title }}</b>
      </h3>
      <div class="h-full flex flex-col items-start justify-between">
        <p class="wrap break-words leading-loose">{{ description }}</p>

      </div>
    </div>
    <div class="ml-2">
      <div class="h-16 w-16 md:h-48 md:w-48 relative break-all">
        <img
          :src="image"
          alt="Article image"
          class="absolute h-full w-full object-cover"
        >
      </div>
    </div>
  </article>
</template>

<script>
import { computed } from '@vue/composition-api'
// import AppButton from './AppButton'

export default {
  components: {
    // AppButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    /* image url */
    image: {
      type: String,
      required: true
    },
    published: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    let datePublished = computed(() => {
      let date = new Date(props.published)
      let day = date.getDate().toString().padStart(2, '0')

      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()

      return `${day}.${month}.${year}`
    })

    return {
      datePublished: datePublished.value
    }
  }
}
</script>
