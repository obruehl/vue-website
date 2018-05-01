<template>
  <div class="Content">
   <div class="container">
      <h1 class="Content__Title">{{ $t('news.title') }}</h1>
      <p>{{ $t('news.introduction') }}</p>
    </div>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
 head() {
    return { title: this.$t('news.title') }
  }
}
</script>
