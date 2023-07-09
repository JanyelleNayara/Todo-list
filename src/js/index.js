// acessar o localstorage
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let logado = document.querySelector("#logado");
logado.innerHTML = `Olá, ${userLogado.username}`;

// validar se já existe um usuário logado
if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar");
  window.location.href = "../../signin.html";
}

// fazer logout
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./src/pages/signin.html";
}
// remover do local storage
// remover token

// cadastrar nova tarefa
function addTask() {
  alert("add task");
}
// mostrar tarefa em tela

// marcar tarefa como lida
function checkTask() {
  alert("check task");
}
// excluir tarefa
function removeTask() {
  alert("remove task");
}
