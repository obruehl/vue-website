<template>
  <div class="Content">
    <div class="container">
      <NavBar/>
    </div>
    <div class="container">
      <h1 class="Content__Title">{{ $t('news.title') }}</h1>
      <p>{{ $t('news.introduction') }}</p>
    </div>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  head() {
    return { title: this.$t('news.title') }
  }
}
</script>
