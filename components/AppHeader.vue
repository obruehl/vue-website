<template>
  <header>
    <nav-bar></nav-bar>
  </header>
</template>

<style scoped>
  header {
    background-color: gray;
    height: 120px;
  }
</style>
<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
