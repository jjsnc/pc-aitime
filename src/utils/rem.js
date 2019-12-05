// rem.js
(function (doc, win) {

    var prem=16; //fontSize   16？  为了尽量不破坏ionic ui的样式 
  
    var pwidth=375//设计稿宽度
  
    var docEl = doc.documentElement,
  
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  
      recalc = function () {
  
        var clientWidth = docEl.clientWidth;
  
        if (!clientWidth) return;
  
        docEl.style.fontSize = prem * (clientWidth / pwidth) + 'px';
  
      };
  
    if (!doc.addEventListener) return;
  
    win.addEventListener(resizeEvt, recalc, false);
  
    doc.addEventListener('DOMContentLoaded', recalc, false);
  
  })(document, window);