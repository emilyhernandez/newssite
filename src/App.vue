<template>
  <div id="app">
    <div class="w-full shadow-md flex items-center">
      <img src="./assets/logo.png" alt="Mountain range logo" class="h-16 mx-4">
      <p>Navigation</p>
    </div>
    <Content/>
  </div>
</template>

<script>
import Content from './components/Content.vue'

export default {
  components: {
    Content
  }
}
</script>
