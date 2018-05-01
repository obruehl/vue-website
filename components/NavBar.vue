<template>
  <b-navbar toggleable="md" type="light" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ path: '/' + this.$store.state.locale + '/' }">VUE</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item :to="{ path: '/' + this.$store.state.locale + '/' }">{{ $t('home.title') }}</b-nav-item>
        <b-nav-item :to="{ path: '/' + this.$store.state.locale + '/news' }">{{ $t('news.title') }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item :to="{ path: '/en/' }">EN</b-dropdown-item>
          <b-dropdown-item :to="{ path: '/es/' }">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<style>

</style>
