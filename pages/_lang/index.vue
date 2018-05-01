<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
      <router-link :to="{ path: this.$store.state.locale + '/news' }">{{ $t('news.title') }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return { title: this.$t('home.title') }
  }
}
</script>
