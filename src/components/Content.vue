<template>
  <div class="hello">
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api'

export default {
  setup() {
    onMounted(() => {
      /* eslint no-console: "off" */
      // console.log('News api key: ', process.env.VUE_APP_NEWS_API_KEY)
      // let headers = new Headers()
      // headers.append('Authorization', process.env.VUE_APP_NEWS_API_KEY)

      // let request = new Request('https://newsapi.org/v2/everything?q=nepal', {
      //   headers
      // })
      // fetch(request)
    })
  }
}
</script>
