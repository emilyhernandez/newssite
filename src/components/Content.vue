<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-4xl">
      <NewsArticle
        v-for="(article, index) in state.articles"
        :key="`article-${index + 1}`"
        :title="article.title"
        :description="article.description"
        class="my-4 border-b border-gray-200 py-4"
      />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from '@vue/composition-api'
import response from '../testdata.json'
import NewsArticle from './NewsArticle'

export default {
  components: {
    NewsArticle
  },
  setup() {
    let state = reactive({
      articles: []
    })

    onMounted(() => {
      // let headers = new Headers()
      // headers.append('Authorization', process.env.VUE_APP_NEWS_API_KEY)

      // let request = new Request('https://newsapi.org/v2/everything?q=nepal', {
        //   headers
      // })
      // fetch(request)
      /* eslint no-console: "off" */
      console.log('Content: ', response.articles)

      state.articles = response.articles
    })

    return {
      state
    }
  }
}
</script>
