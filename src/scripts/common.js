import $ from 'jquery'
import i18next from 'i18next'
import LngDetector from 'i18next-browser-languagedetector';
import resources from 'locales'

import 'styles/styles.css'
import 'styles/carousel.css'

i18next
  .use(LngDetector)
  .init({
    ns: ['common', 'home', 'application', "join", 'about'],
    defaultNS: 'home',
    debug: 'true',
    resources
  })

$(window).resize(function(){
  if ($('#logo > span').css('display') === 'none') {
    $('#menu').css('display', 'block')
  } else {
    $('#menu').css('display', 'none')
  }
})

$(() => {
	$('#logo').click(() => {
    if ($('#logo > span').css('display') === 'inline') {
      if ($('#menu').css('display') === 'none') {
        $('#menu').css('display', 'block')
      } else if ($('#menu').css('display') === 'block') {
        $('#menu').css('display', 'none')
      } else {
        $('#menu').css('display', 'block')
      }
    }
  })
})

