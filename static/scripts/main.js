// import M from "../../node_modules/materialize-css/dist/js/materialize.js";

// import * as AOS from "aos";

// M.AutoInit();

var options = {
  strings: ['<h3>UBC BA Honours Psychology.</h3>', '<h3>Web developer.</h3>', '<h3>Loves machine learning.</h3>',
    '<h3>Passionate about cognitive science.</h3>'],
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

// const url = 'https://api.altmetric.com/v1/doi/10.1101/482349';
const url = 'https://api.altmetric.com/v1/doi/10.1523/eneuro.0096-20.2020';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
  let score = data.images.small;
  document.getElementById("altmetric").setAttribute("src", score);
  return score
}, function(error) {
      console.log(error.message); //=> String
});

const dev_neuro_url = 'https://api.altmetric.com/v1/doi/10.1002/dneu.22808';
fetch(dev_neuro_url)
    .then((resp) => resp.json())
    .then(function(data) {
      let score = data.images.small;
      document.getElementById("altmetric_dev_neuro").setAttribute("src", score);
      return score
    }, function(error) {
      console.log(error.message); //=> String
    });

const nat_comms_url = 'https://api.altmetric.com/v1/doi/10.1038/s41467-021-26255-2';
fetch(nat_comms_url)
    .then((resp) => resp.json())
    .then(function(data) {
      let score = data.images.small;
      document.getElementById("altmetric_nat_comms").setAttribute("src", score);
      return score
    }, function(error) {
      console.log(error.message); //=> String
    });


AOS.init();
