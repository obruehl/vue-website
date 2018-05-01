<template>
  <div class="Content">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="Content__Title">{{ $t('home.title') }}</h1>
          <p>{{ $t('home.introduction') }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    head() {
      return { title: this.$t('home.title') }
    }
  }
</script>
