import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'

import '../common'

import 'styles/about.scss'

i18next.setDefaultNamespace('about')
jqueryI18next.init(i18next, $)

$(document.body).localize()