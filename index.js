;(function(global, doc) {
    'use strict'
    function r(s) {
      const cliwidth = document.clientWidth
      const pattern = !navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
      )
      const baseVal = 1024
      const end = location.hash === '#/pc'
      if (pattern && cliwidth > baseVal) {
        /**
         * 检测路由环境，决定是否增加样式
         */
        if (!end) {
          style.innerHTML =
          'html{font-size:64px !important;background:rgb(245,245,245);}body{max-width:640px;margin-right:auto!important;margin-left:auto!important;background:rgba(251,251,251);}'
        } else {
          style.innerHTML = ''
        }
      } else {
        style.innerHTML = ''
      }
    }
    const document = doc.documentElement || {}
    const style = doc.createElement('style')
    document.firstElementChild.appendChild(style)
    global.addEventListener(
      'resize',
      function() {
        r()
      },
      false
    )
    global.addEventListener(
      'pageshow',
      function(f) {
        f.persisted && r()
      },
      false
    )
    r()
  })(window, document)