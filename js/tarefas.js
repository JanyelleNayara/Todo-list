
// usuário
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
logado.innerHTML = `Olá, ${userLogado.nome}`

logado = userLogado[nome].value
console.log(userLogado, logado)


// tarefas
if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar')
  window.location.href = "../index.html"
}

// logout na plataforma
function logout () {
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = "../index.html"
}

