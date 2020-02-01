<template>
  <div id="app">
    <div class="w-full shadow-md flex items-center">
      <img src="./assets/logo.png" alt="Mountain range logo" class="h-16 mx-4">
      <p>Navigation</p>
    </div>
    <Content/>
    <!-- <div class="whitespace-normal">
      <p>
        Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </p>
    </div> -->
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
