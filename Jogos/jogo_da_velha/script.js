// ==========================
// CONFIGURAÇÕES INICIAIS
// ==========================

var nivelIA = "medio"; // padrão

var sinalJogador = "";
var sinalComputador = "";
var tabuleiro = ["e","e","e","e","e","e","e","e","e"];
var turno = 0;
var jogoFinalizado = false;
var bloqueado = false; // 🔒 NOVO CONTROLE

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
// ESCOLHER DIFICULDADE
// ==========================

function escolherDificuldade(e) {

  nivelIA = e.target.getAttribute("data-dif");

  for (var i = 0; i < botoesDificuldade.length; i++) {
    botoesDificuldade[i].classList.remove("ativo");
  }

  e.target.classList.add("ativo");
}

// ==========================
// INICIAR JOGO
// ==========================

function iniciarJogo(e) {

  dark.classList.add("hidden");

  sinalJogador = e.target.getAttribute("data-sign");
  sinalComputador = sinalJogador === "x" ? "o" : "x";

  for (var i = 0; i < casas.length; i++) {
    casas[i].addEventListener("click", jogadaJogador);
  }

  if (sinalJogador === "o") {
    bloqueado = true;
    setTimeout(jogadaComputador, 500);
  }
}

// ==========================
// JOGADA DO JOGADOR
// ==========================

function jogadaJogador(e) {

  if (bloqueado) return; // 🔒 NÃO DEIXA JOGAR ENQUANTO IA PENSA
  if (!e.target.classList.contains("playable")) return;
  if (jogoFinalizado) return;

  bloqueado = true; // 🔒 BLOQUEIA IMEDIATAMENTE

  e.target.innerHTML = sinalJogador;
  e.target.classList.remove("playable");
  tabuleiro[e.target.id] = sinalJogador;
  turno++;

  verificarFim("jogador");

  if (!jogoFinalizado) {
    setTimeout(jogadaComputador, 500);
  } else {
    bloqueado = false;
  }
}

// ==========================
// JOGADA DO COMPUTADOR
// ==========================

function jogadaComputador() {

  if (jogoFinalizado) {
    bloqueado = false;
    return;
  }

  var movimento = logicaIA();

  casas[movimento].innerHTML = sinalComputador;
  casas[movimento].classList.remove("playable");
  tabuleiro[movimento] = sinalComputador;
  turno++;

  verificarFim("computador");

  bloqueado = false; // 🔓 LIBERA DEPOIS QUE IA JOGA
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
// LÓGICA IA (mantida igual)
// ==========================

function logicaIA() {

  if (nivelIA === "facil") {
    if (Math.random() < 0.7) {
      return aleatorio(9);
    }
  }

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

  if (tabuleiro[4] === "e") return 4;

  var cantos = [0,2,6,8];
  for (var c = 0; c < cantos.length; c++) {
    if (tabuleiro[cantos[c]] === "e") {
      return cantos[c];
    }
  }

  return aleatorio(9);
}

// ==========================
// REINICIAR
// ==========================

function reiniciar(msg) {

  mensagem.textContent = msg;
  mensagem.classList.remove("hidden");
  dark.classList.remove("hidden");

  tabuleiro = ["e","e","e","e","e","e","e","e","e"];
  turno = 0;
  jogoFinalizado = false;
  bloqueado = false; // 🔓 garante reset

  for (var j = 0; j < casas.length; j++) {
    casas[j].innerHTML = "";
    casas[j].classList.add("playable");
  }

  setTimeout(function () {
    mensagem.classList.add("hidden");
  }, 1500);
}

// ==========================
// ALEATÓRIO VÁLIDO
// ==========================

function aleatorio(num) {
  var r = Math.floor(Math.random() * num);
  while (tabuleiro[r] !== "e") {
    r = Math.floor(Math.random() * num);
  }
  return r;
}
