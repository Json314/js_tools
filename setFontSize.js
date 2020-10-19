/*
* 动态设置html的font-size
* 使用方式：head中页面加载前引入。否则监听不到 DOMContentLoaded事件
*/
;
(function() {
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      let docEl = document.documentElement,
          clientWidth = docEl.clientWidth || window.screen.clientWidth || document.body.clientWidth;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
    recalc();

    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})();
