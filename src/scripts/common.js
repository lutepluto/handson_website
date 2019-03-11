import $ from 'jquery'
import i18next from 'i18next'

import 'styles/styles.css'
import 'styles/carousel.css'

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
    i18next.changeLanguage(i18next.language === 'en' ? 'zh' : 'en', () => {
      $(document.body).localize()
      // iframe toggle
      $('.placeholder-guide')[`${i18next.language === 'en' ? 'remove' : 'add'}Class`]('hide')
      $('#goldendata_form_vAzl4E')[`${i18next.language === 'en' ? 'add' : 'remove'}Class`]('hide')
      $('#goldendata_form_4wW6YZ')[`${i18next.language === 'en' ? 'add' : 'remove'}Class`]('hide')
    })
  })
})

