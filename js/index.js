function entrar(){
  const nome = document.getElementById("nome").value.trim();
  const anime = document.getElementById("anime").value;

  if(!nome || !anime){
    alert("Preencha seu nome e escolha um anime");
    return;
  }

  localStorage.setItem("user", nome);
  localStorage.setItem("anime", anime);

  window.location.href = "home.html";
}
