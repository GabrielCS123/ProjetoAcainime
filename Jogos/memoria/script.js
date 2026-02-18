// ==========================
// PEGAR DADOS DO LOCALSTORAGE
// ==========================

const nome = localStorage.getItem("user");
const anime = localStorage.getItem("anime");

// ==========================
// Mostrar na tela
// ==========================

let nome_anime = "";

if (anime === "naruto") {
  nome_anime = "Naruto";
}
else if (anime === "onepiece") {
  nome_anime = "One Piece";
}
else if (anime === "demon") {
  nome_anime = "Demon Slayer";
}

// Se não tiver dados, volta para o login
if (!nome || !anime) {
  window.location.href = "index.html";
}

// Mostra na tela
document.getElementById("user").textContent = `Olá, ${nome} 👋`;
document.getElementById("animeUser").textContent = `Anime escolhido: ${nome_anime}`;

// ==========================
// BIBLIOTECA DE IMAGENS
// ==========================

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
    "https://iili.io/fDzWIet.png"
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
  ]

};

// ==========================
// VARIÁVEIS DO JOGO
// ==========================

var images = [];
var tempElt1 = null;
var tempElt2 = null;
var click = -1;
var win = 0;
var score = 0;
var time = 0;
var timer;

// ==========================
// ELEMENTOS
// ==========================

var preElt = document.querySelector("#pre");
var boxElts = document.getElementsByClassName("box");
var mainElt = document.querySelector(".main");
var timeElt = document.querySelector("#time");
var scoreElt = document.querySelector("#score");
var postElt = document.querySelector("#post");
var finalElt = document.querySelector("#final");
var againElt = document.querySelector("#again");

// ==========================
// INICIAR JOGO AUTOMATICAMENTE
// ==========================

window.addEventListener("DOMContentLoaded", () => {

  let tema = anime;

  if (!tema || !library[tema]) {
    tema = "Naruto";
  }

  if (preElt) {
    preElt.classList.add("hidden");
  }

  activateTheme(tema);

});

// ==========================
// ATIVAR TEMA
// ==========================

function activateTheme(theme) {

  images = [];

  for (let i = 0; i < 16; i++) {
    images.push(library[theme][i]);
  }

  for (let i = 0; i < 16; i++) {

    let rand = Math.floor(Math.random() * images.length);

    let imgTag = boxElts[i].querySelector(".box-back img");

    imgTag.src = images[rand];

    images.splice(rand, 1);

    boxElts[i].classList.remove("flipped");
    boxElts[i].classList.add("play");
  }

}

// ==========================
// LÓGICA DO JOGO
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

      timer = setInterval(function () {

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

    // DIFERENTES
    if (img1 !== img2) {

      mainElt.removeEventListener("click", gameLogic);

      setTimeout(function () {

        tempElt1.classList.remove("flipped");
        tempElt2.classList.remove("flipped");

        mainElt.addEventListener("click", gameLogic);

      }, 500);

      if (score > 0) score -= 2;

      scoreElt.textContent = score;

    }

    // IGUAIS
    else {

      score += 10;
      win += 2;

      tempElt1.classList.remove("play");
      tempElt2.classList.remove("play");

      scoreElt.textContent = score;

      // GANHOU
      if (win === 16) {

        clearInterval(timer);

        finalElt.innerHTML =
          "Você fez " + score + " pontos em " + time + " segundos";

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

  let tema = anime;

  if (!tema || !library[tema]) {
    tema = "Naruto";
  }

  activateTheme(tema);

  timeElt.textContent = time;
  scoreElt.textContent = score;

}
