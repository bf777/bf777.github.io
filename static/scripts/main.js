// import M from "../../node_modules/materialize-css/dist/js/materialize.js";

// import * as AOS from "aos";

// M.AutoInit();

var options = {
  strings: ['<h3>UBC PhD Psychology student.</h3>','<h3>Passionate about cognitive science.</h3>','<h3>Investigates effort for avoidance and reward.</h3>'],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
};

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

const altmetric_urls = [
    'https://api.altmetric.com/v1/doi/10.1101/2022.06.21.497075',
    'https://api.altmetric.com/v1/doi/10.1101/2021.11.25.469891',
    'https://api.altmetric.com/v1/doi/10.1038/s41467-021-26255-2',
    'https://api.altmetric.com/v1/doi/10.1530/JOE-21-0154',
    'https://api.altmetric.com/v1/doi/10.1002/dneu.22808',
    'https://api.altmetric.com/v1/doi/10.1523/eneuro.0096-20.2020',
    'https://api.altmetric.com/v1/doi/10.1101/482349']

for(let i = 0; i < altmetric_urls.length; i++) {
    var url = altmetric_urls[i];
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let score = data.images.large;
            document.getElementById("altmetric_" + i).setAttribute("src", score);
            return score
        }, function(error) {
            console.log(error.message); //=> String
        });
}

AOS.init();
