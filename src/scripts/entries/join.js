import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'
import LngDetector from 'i18next-browser-languagedetector';
import resources from 'locales'

import '../common'

i18next
  .use(LngDetector)
  .init({
    ns: ['common', 'application'],
    defaultNS: 'application',
    debug: 'true',
    resources
  }, (err) => {
    if (err) {
      return console.err(err)
    }

    jqueryI18next.init(i18next, $)
    $(document.body).localize()

    const lng = i18next.language
    $('.placeholder-guide')[`${lng === 'en' ? 'remove' : 'add'}Class`]('hide')
    $('#goldendata_form_4wW6YZ')[`${lng === 'en' ? 'add' : 'remove'}Class`]('hide')
  })
