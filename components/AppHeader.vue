<template>
  <header>
    <b-container>
      <b-row>
        <b-col>
          <nav-bar></nav-bar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<style scoped>
  header {
    background-color:#17a2b8;
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
