import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'
import LngDetector from 'i18next-browser-languagedetector';
import resources from 'locales'

import '../common'

import 'styles/about.scss'

i18next
  .use(LngDetector)
  .init({
    ns: ['common', 'about'],
    defaultNS: 'about',
    debug: 'true',
    resources
  }, (err) => {
    if (err) {
      return console.err(err)
    }

    jqueryI18next.init(i18next, $)
    $(document.body).localize()
  })
