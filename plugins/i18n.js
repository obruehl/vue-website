
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'es': require('~/locales/es.json')
    }
  })

  app.i18n.path = (link) => {
    let p = link
    console.log(p)
    if (!(p.indexOf('/en') === 0) && !(p.indexOf('/es') === 0)) {
      p = '/'+app.i18n.locale+'/'+link
    }

    return p
  }
}
