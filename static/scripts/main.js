var options = {
  strings: ["<h3>Arts Psychology.</h3>", "<h3>Web Developer.</h3>", "<h3>Loves machine learning.</h3>", "<h3>Arduino Enthusiast.</h3>", "<h3>Geopolitics Nerd.</h3>"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true
}

var typed = new Typed(".element", options);

var els, i, len, title;
  var konamiCode = '38,38,40,40,37,39,37,39,66,65';
  var keyPresses = [];
  var checkKonami = function(e) {
    keyPresses.push(e.keyCode);
    if (keyPresses.slice(keyPresses.length-10).join() === konamiCode) {
      runKonami();
    }
  };
  var runKonami = function() {
    els = document.getElementsByTagName('p');
    for (i = 0, len = els.length; i < len; i++) {
      title = els[i].textContent || els[i].innerText;
      title = title.trim();
      els[i].innerHTML = title.split('').reverse().join('');
    }
  };
  document.addEventListener('keyup', checkKonami);


AOS.init();

var elem = document.querySelector('.tooltipped');
var instance = M.Tooltip.init(elem, options);

var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, options);

