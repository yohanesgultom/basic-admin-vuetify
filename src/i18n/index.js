/**
 * Vue i18n
 *
 * @library
 *
 * http://kazupon.github.io/vue-i18n/en/
 */

// Lib imports
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const requireLang = require.context(
  '@/i18n/lang',
  true,
  /\.json$/
)

const messages = {}
for (const file of requireLang.keys()) {
  const path = file.replace(/(\.\/|\.json$)/g, '').split('/')
  path.reduce((o, s, i) => {
    if (o[s]) return o[s]

    o[s] = i + 1 === path.length
      ? requireLang(file)
      : {}

    return o[s]
  }, messages)
}

const i18n = new VueI18n({
  locale: 'id',
  fallbackLocale: 'en',
  messages
})

export default i18n
