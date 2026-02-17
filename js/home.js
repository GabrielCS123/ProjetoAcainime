// Pega os dados salvos no login
const nome = localStorage.getItem("user");
const anime = localStorage.getItem("anime");
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

// APLICA O TEMA
document.body.classList.add(`theme-${anime}`);
