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

  $(document).on('click', '[data-toggle="i18next"]', () => {
    const lng = i18next.language
    i18next.changeLanguage(lng === 'en' ? 'zh' : 'en', () => {
      $(document.body).localize()

      // iframe toggle
      $('.placeholder-guide')[`${lng === 'en' ? 'remove' : 'add'}Class`]('hide')
      $('#goldendata_form_vAzl4E')[`${lng === 'en' ? 'add' : 'remove'}Class`]('hide')
      $('#goldendata_form_4wW6YZ')[`${lng === 'en' ? 'add' : 'remove'}Class`]('hide')
    })
  });
})

