// ==========================
// CONFIGURAÇÕES INICIAIS
// ==========================

var nivelIA = "medio"; // padrão

var sinalJogador = "";
var sinalComputador = "";
var tabuleiro = ["e","e","e","e","e","e","e","e","e"];
var turno = 0;
var jogoFinalizado = false;

// ==========================
// SELETORES DO DOM
// ==========================

var dark = document.querySelector("#dark");
var mensagem = document.querySelector("#message");
var playX = document.querySelector("#playX");
var playO = document.querySelector("#playO");
var casas = document.querySelectorAll(".play");
var botoesDificuldade = document.querySelectorAll(".dificuldade");

// ==========================
// EVENTOS
// ==========================

playX.addEventListener("click", iniciarJogo);
playO.addEventListener("click", iniciarJogo);

for (var i = 0; i < botoesDificuldade.length; i++) {
  botoesDificuldade[i].addEventListener("click", escolherDificuldade);
}

// ==========================
// ESCOLHER DIFICULDADE (VISUAL BONITO)
// ==========================

function escolherDificuldade(e) {
  nivelIA = e.target.getAttribute("data-dif");

  // remove estilo de todos
  for (var i = 0; i < botoesDificuldade.length; i++) {
    botoesDificuldade[i].classList.remove("ativo");
  }

  // adiciona estilo no escolhido
  e.target.classList.add("ativo");
}

// ==========================
// INICIAR JOGO
// ==========================

function iniciarJogo(e) {

  // só deixa começar se escolher dificuldade
  if (!nivelIA) {
    alert("Escolha a dificuldade primeiro!");
    return;
  }

  dark.classList.add("hidden");

  sinalJogador = e.target.getAttribute("data-sign");
  sinalComputador = sinalJogador === "x" ? "o" : "x";

  // se jogador escolher O, computador começa
  if (sinalJogador === "o") {
    setTimeout(jogadaComputador, 300);
  }

  for (var i = 0; i < casas.length; i++) {
    casas[i].addEventListener("click", jogadaJogador);
  }
}

// ==========================
// JOGADA DO JOGADOR
// ==========================

function jogadaJogador(e) {
  if (!e.target.classList.contains("playable")) return;

  e.target.innerHTML = sinalJogador;
  e.target.classList.remove("playable");
  tabuleiro[e.target.id] = sinalJogador;
  turno++;

  verificarFim("jogador");

  if (!jogoFinalizado) {
    setTimeout(jogadaComputador, 500);
  }

  e.target.removeEventListener("click", jogadaJogador);
}

// ==========================
// JOGADA DO COMPUTADOR
// ==========================

function jogadaComputador() {
  if (jogoFinalizado) return;

  var movimento = logicaIA();

  casas[movimento].innerHTML = sinalComputador;
  casas[movimento].classList.remove("playable");
  casas[movimento].removeEventListener("click", jogadaJogador);
  tabuleiro[movimento] = sinalComputador;
  turno++;

  verificarFim("computador");
}

// ==========================
// VERIFICAR FIM DE JOGO
// ==========================

function verificarFim(quemJogou) {

  if (quemJogou === "jogador" && verificarTabuleiro(sinalJogador)) {
    jogoFinalizado = true;
    setTimeout(function () {
      reiniciar("Você venceu! 🎉");
    }, 600);
  }

  else if (quemJogou === "computador" && verificarTabuleiro(sinalComputador)) {
    jogoFinalizado = true;
    setTimeout(function () {
      reiniciar("Você perdeu! 🤖");
    }, 600);
  }

  else if (turno === 9) {
    jogoFinalizado = true;
    setTimeout(function () {
      reiniciar("Empate! 🤝");
    }, 600);
  }
}

// ==========================
// VERIFICAR VITÓRIA
// ==========================

function verificarTabuleiro(sinal) {
  return (
    (tabuleiro[0] === sinal && tabuleiro[1] === sinal && tabuleiro[2] === sinal) ||
    (tabuleiro[3] === sinal && tabuleiro[4] === sinal && tabuleiro[5] === sinal) ||
    (tabuleiro[6] === sinal && tabuleiro[7] === sinal && tabuleiro[8] === sinal) ||
    (tabuleiro[0] === sinal && tabuleiro[3] === sinal && tabuleiro[6] === sinal) ||
    (tabuleiro[1] === sinal && tabuleiro[4] === sinal && tabuleiro[7] === sinal) ||
    (tabuleiro[2] === sinal && tabuleiro[5] === sinal && tabuleiro[8] === sinal) ||
    (tabuleiro[0] === sinal && tabuleiro[4] === sinal && tabuleiro[8] === sinal) ||
    (tabuleiro[2] === sinal && tabuleiro[4] === sinal && tabuleiro[6] === sinal)
  );
}

// ==========================
// LÓGICA DA IA (MELHORADA)
// ==========================

function logicaIA() {

  // 🔵 FÁCIL — erra bastante
  if (nivelIA === "facil") {
    if (Math.random() < 0.7) {
      return aleatorio(tabuleiro.length);
    }
  }

  // 🔴 DIFÍCIL — tenta GANHAR primeiro
  if (nivelIA === "dificil") {
    for (var i = 0; i < 9; i++) {
      if (tabuleiro[i] === "e") {
        tabuleiro[i] = sinalComputador;
        if (verificarTabuleiro(sinalComputador)) {
          tabuleiro[i] = "e";
          return i;
        }
        tabuleiro[i] = "e";
      }
    }
  }

  // 🟡 MÉDIO — tenta BLOQUEAR primeiro
  if (nivelIA === "medio" || nivelIA === "dificil") {
    for (var i = 0; i < 9; i++) {
      if (tabuleiro[i] === "e") {
        tabuleiro[i] = sinalJogador;
        if (verificarTabuleiro(sinalJogador)) {
          tabuleiro[i] = "e";
          return i;
        }
        tabuleiro[i] = "e";
      }
    }
  }

  // Centro primeiro (boa estratégia)
  if (tabuleiro[4] === "e") {
    return 4;
  }

  // Depois cantos
  var cantos = [0, 2, 6, 8];
  for (var c = 0; c < cantos.length; c++) {
    if (tabuleiro[cantos[c]] === "e") {
      return cantos[c];
    }
  }

  // Última opção: aleatório
  return aleatorio(tabuleiro.length);
}

// ==========================
// REINICIAR JOGO
// ==========================

function reiniciar(msg) {

  mensagem.textContent = msg;
  mensagem.classList.remove("hidden");
  dark.classList.remove("hidden");

  tabuleiro = ["e","e","e","e","e","e","e","e","e"];
  turno = 0;
  jogoFinalizado = false;

  for (var j = 0; j < casas.length; j++) {
    casas[j].innerHTML = "";
    casas[j].classList.add("playable");
    casas[j].removeEventListener("click", jogadaJogador);
  }

  // volta os botões depois
  setTimeout(function () {
    mensagem.classList.add("hidden");
  }, 1500);
}

// ==========================
// NÚMERO ALEATÓRIO VÁLIDO
// ==========================

function aleatorio(num) {
  var r = Math.floor(Math.random() * num);
  while (tabuleiro[r] !== "e") {
    r = Math.floor(Math.random() * num);
  }
  return r;
}