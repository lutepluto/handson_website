import i18next from 'i18next'
import commonLocales from 'locales'

i18next.init({
  fallbackLng: 'zh',
  ns: 'transalation',
  debug: true
})

i18next.addResourceBundle('en', 'translations', commonLocales, true, true)

export default i18next
