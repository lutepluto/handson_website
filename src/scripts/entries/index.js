import $ from 'jquery'
import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'

import '../common'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
import "styles/home.scss"

jqueryI18next.init(i18next, $)
$(document.body).localize()

$(() => {
  $('.video-link').magnificPopup({
    items: {
      src: 'http://www.youtube.com/watch?v='
    },
    type: 'iframe',
    iframe: {
      markup: `<div class="mfp-iframe-scaler">
                <div class="mfp-close"></div>
                <iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>
               </div>
              `, 
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: 'v=',
          src: 'http://player.youku.com/embed/XMTU2MzIxNjkyNA==?autoplay=1'
        }
      },
      srcAction: 'iframe_src',
    }
  })
})