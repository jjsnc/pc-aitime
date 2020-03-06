

// PC端 移动端 跳转
var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
if (is_mobi) {
    window.location.href="https://m.heyfish.com/#/home" 
} else {
}