// Pega os dados salvos no login
const nome = localStorage.getItem("user");
const anime = localStorage.getItem("anime");

// Se não tiver dados, volta para o login
if (!nome || !anime) {
  window.location.href = "index.html";
}

// Mostra na tela
document.getElementById("user").textContent = `Olá, ${nome} 👋`;
document.getElementById("animeUser").textContent = `Anime escolhido: ${anime}`;

// APLICA O TEMA
document.body.classList.add(`theme-${anime}`);