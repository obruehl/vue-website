<template>
  <div class="Content">
    <div class="container">
      <NavBar/>
    </div>
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
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
      return { title: this.$t('home.title') }
    }
  }
</script>
