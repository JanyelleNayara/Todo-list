// validar login assim que acessa a plataforma
// usuário
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let logado = document.querySelector("#logado");
logado.innerHTML = `Olá, ${userLogado.nome}`;

// tarefas
if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar");
  window.location.href = "../index.html";
}

// logout na plataforma
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../index.html";
}

// MANIPULAÇÃO DE TAREFAS
const taskContent = document.querySelector("#task-content");
let tasks = [];
const lista = document.querySelector("#list");
// PEGAR OS DADOS DO INPUT
function addTask() {
  if (taskContent.value) {
    tasks.push({
      task: taskContent.value,
      done: false,
      user: userLogado.nome,
    });
  } else {
    alert("Digite uma tarefa válida");
  }
  taskContent.value = "";
  saveTaskLocalStorage();
  showTask();
}
// MOSTRAR A TAREFA
function showTask() {
  let novaLi = "";

  tasks.forEach((item, index) => {
    if (item.user == userLogado.nome) {
      novaLi += `
        <li class="card ${item.done && "done"}">
        <div class="done-open-task">        
        <button onclick="doneTask(${index})">
        <i class="fa-solid fa-circle-check"></i>
        </button>
        </div>
        <span class="task-item">${item.task}</span>
        <button class="drop-task" onclick="droppTask(${index})">
      <i class="fa-solid fa-trash"></i>
      </button>
      </li>
      `;
    }
  });
  lista.innerHTML = novaLi;
}

// EXCLUIR A TAREFA
function droppTask(index) {
  tasks.splice(index, 1);
  saveTaskLocalStorage();
  showTask();
}

// MARCAR COMO FEITO
function doneTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTaskLocalStorage();
  showTask();
}

/// salvar lista no localstorage

function saveTaskLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/// PEGAR LISTA NO LOCALSTORAGE
function getTask() {
  const tasksLocalStorage = localStorage.getItem("tasks");

  if (tasksLocalStorage) {
    tasks = JSON.parse(tasksLocalStorage);
  }
  showTask();
}

getTask();
