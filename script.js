let toggle = document.getElementById('toggle');
let body = document.getElementById('body');

toggle.addEventListener('click', function () {
  body.classList.toggle('open');
});

/* texte H1 ecriture automatique avec plusieurs phrases*/
var typed = new Typed('#element', {
  strings: [
    "Hi! I'm Thomas",
    "Salut! Moi c'est Thomas",
    'Welcome on my portfolio <br> the web développement !',
    'Bienvenue sur mon portfolio <br> de développeur web !',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
