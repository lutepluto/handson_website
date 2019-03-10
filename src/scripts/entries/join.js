import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'

import '../common'

i18next.setDefaultNamespace('join')
jqueryI18next.init(i18next, $)
$(document.body).localize()
