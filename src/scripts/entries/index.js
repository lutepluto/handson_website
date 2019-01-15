import $ from 'jquery'
import 'bootstrap'

import 'styles/styles.css'
import 'styles/carousel.css'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'

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