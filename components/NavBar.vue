<template>
    <nav>
      <ul>
      <li>
        <router-link :to="{ path: '/' + this.$store.state.locale + '/' }">{{ $t('home.title') }}</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/' + this.$store.state.locale + '/news' }">{{ $t('news.title') }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
  .nuxt-link-exact-active {
    font-weight: bold;
  }
</style>
