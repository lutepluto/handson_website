import $ from 'jquery'

import '../common'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'

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