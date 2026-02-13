var library = {
  Naruto: [
  "https://iili.io/fDICOIn.png",
  "https://iili.io/fDICOIn.png",

  "https://iili.io/fDICwmX.png",
  "https://iili.io/fDICwmX.png",

  "https://iili.io/fDICeXs.png",
  "https://iili.io/fDICeXs.png",

  "https://iili.io/fDICjet.png",
  "https://iili.io/fDICjet.png",

  "https://iili.io/fDICkLG.png",
  "https://iili.io/fDICkLG.png",

  "https://iili.io/fDICS14.png",
  "https://iili.io/fDICS14.png",

  "https://iili.io/fDICUrl.png",
  "https://iili.io/fDICUrl.png",

  "https://iili.io/fDICPp9.png",
  "https://iili.io/fDICPp9.png"
],

  demon: [
    "https://iili.io/fDzWKXa.png",
    "https://iili.io/fDzWKXa.png",

    "https://iili.io/fDzWFzg.png",
    "https://iili.io/fDzWFzg.png",

    "https://iili.io/fDzWngp.png",
    "https://iili.io/fDzWngp.png",

    "https://iili.io/fDzWfLJ.png",
    "https://iili.io/fDzWfLJ.png",

    "https://iili.io/fDzWTmX.png",
    "https://iili.io/fDzWTmX.png",

    "https://iili.io/fDzWz7I.png",
    "https://iili.io/fDzWz7I.png",

    "https://iili.io/fDzWRXs.png",
    "https://iili.io/fDzWRXs.png",

    "https://iili.io/fDzWIet.png",
    "https://iili.io/fDzWIet.png",
  ],

  onepiece: [
  "https://iili.io/fDIWil4.png",
  "https://iili.io/fDIWil4.png",

  "https://iili.io/fDIW4iG.png",
  "https://iili.io/fDIW4iG.png",

  "https://iili.io/fDIWgxn.png",
  "https://iili.io/fDIWgxn.png",

  "https://iili.io/fDIWrVs.png",
  "https://iili.io/fDIWrVs.png",

  "https://iili.io/fDIWtO7.png",
  "https://iili.io/fDIWtO7.png",

  "https://iili.io/fDIWDb9.png",
  "https://iili.io/fDIWDb9.png",

  "https://iili.io/fDIWpWu.png",
  "https://iili.io/fDIWpWu.png",

  "https://iili.io/fDIXHfj.png",
  "https://iili.io/fDIXHfj.png"
],


};

var images = [];
var tempElt1 = null;
var tempElt2 = null;
var click = -1;
var win = 0;
var score = 0;
var time = 0;
var timer;

var preElt = document.querySelector("#pre");
var themesElt = document.querySelector("#themes");
var boxElts = document.getElementsByClassName("box");
var mainElt = document.querySelector(".main");
var timeElt = document.querySelector("#time");
var scoreElt = document.querySelector("#score");
var postElt = document.querySelector("#post");
var finalElt = document.querySelector("#final");
var againElt = document.querySelector("#again");

// ==========================
// ESCOLHER TEMA
// ==========================
themesElt.addEventListener("click", function(e) {
  if (e.target.classList.contains("themes")) {
    activateTheme(e.target.id);
    preElt.classList.add("hidden");
  }
});

function activateTheme(theme) {
  images = [];

  //PEGA APENAS 16 IMAGENS (CORREÇÃO)
  for (let i = 0; i < 16; i++) {
    images.push(library[theme][i]);
  }

  // Distribuir aleatoriamente nas 16 primeiras cartas
  for (let i = 0; i < 16; i++) {
    var rand = Math.floor(Math.random() * images.length);

    var imgTag = boxElts[i].querySelector(".box-back img");
    imgTag.src = images[rand];

    images.splice(rand, 1);

    // Reset visual
    boxElts[i].classList.remove("flipped");
    boxElts[i].classList.add("play");
  }
}

// ==========================
// LÓGICA DO JOGO (FLIP)
// ==========================
mainElt.addEventListener("click", gameLogic);

function gameLogic(e) {
  var card = e.target.closest(".box");

  if (!card || !card.classList.contains("play")) return;

  card.classList.add("flipped");

  // PRIMEIRO CLIQUE
  if (click < 1) {
    tempElt1 = card;

    if (click === -1) {
      timer = setInterval(function() {
        time++;
        timeElt.textContent = time;
      }, 1000);
    }

    click = 1;
  }

  // SEGUNDO CLIQUE
  else if (card !== tempElt1) {
    tempElt2 = card;

    var img1 = tempElt1.querySelector(".box-back img").src;
    var img2 = tempElt2.querySelector(".box-back img").src;

    //DIFERENTES
    if (img1 !== img2) {
      mainElt.removeEventListener("click", gameLogic);

      setTimeout(function() {
        tempElt1.classList.remove("flipped");
        tempElt2.classList.remove("flipped");
        mainElt.addEventListener("click", gameLogic);
      }, 500);

      if (score > 0) score -= 2;
      scoreElt.textContent = score;
    }

    //IGUAIS
    else {
      score += 10;
      win += 2;

      tempElt1.classList.remove("play");
      tempElt2.classList.remove("play");

      scoreElt.textContent = score;

      // JOGO GANHO
      if (win === 16) {
        clearInterval(timer);
        finalElt.innerHTML =
          "Você fez " + score + " pontos <br> em " + time + " segundos";
        postElt.classList.remove("hidden");
      }
    }

    click = 0;
  }
}

// ==========================
// REINICIAR JOGO
// ==========================
againElt.addEventListener("click", resetGame);

function resetGame() {
  tempElt1 = null;
  tempElt2 = null;
  click = -1;
  win = 0;
  score = 0;
  time = 0;

  clearInterval(timer);

  postElt.classList.add("hidden");
  preElt.classList.remove("hidden");

  for (let i = 0; i < 16; i++) {
    boxElts[i].classList.add("play");
    boxElts[i].classList.remove("flipped");
  }

  timeElt.textContent = time;
  scoreElt.textContent = score;
}
