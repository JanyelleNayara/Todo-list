// verificar se existe um usuário logado
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let token = localStorage.getItem("token");
let logado = document.querySelector("#logado");
let loading = document.querySelector(".loading");
let index = document.querySelector(".todo-root");

if (!userLogado || !token) {
  index.setAttribute("style", 'display: none')
} else {
  loading.setAttribute("style", 'display: none')
  logado.innerHTML = `Olá, ${userLogado.username}`;
}

// fazer logout e remover os userLogado e token do localstorage
function logout() {
  localStorage.removeItem("userLogado");
  localStorage.removeItem("token");
  window.location.href = "./src/pages/signin.html";
}

// pegar dados
const newTask = document.querySelector("#task-content");
const taskList = document.querySelector("#task-list");
let tasks = [];
// adicionar task

newTask.addEventListener('keydown', function(e) {
  if (e.keyCode === 13){
    addTask()
  }
})

function addTask() {
  if (newTask.value) {
    tasks.push({
      task: newTask.value,
      email: userLogado.email,
      data: new Date().toLocaleString(),
      isDone: false,
    });
  } else {
    alert("preencha uma tarefa");
  }
  newTask.value = "";
  // mostrar em tela
  saveTaskLocalStorage();
  showTask();
}
// mostrar task
function showTask() {
  let newCard = "";

  tasks.forEach((item, index) => {
    if (item.email == userLogado.email) {
      newCard += `
      <li class='card ${item.isDone && 'done'}'>
        <i class="fa-regular fa-circle-check" onclick="checkTask(${index})"></i>    
        <span onclick='checkTask(${index})' class="task">${item.task}</span>
        <i class="fa-regular fa-trash-can" onclick="removeTask(${index})"></i>
    </li>
      `;
    }
  });
  taskList.innerHTML = newCard;
}
// concluir tasks
function checkTask(index) {
  tasks[index].isDone = !tasks[index].isDone;
  saveTaskLocalStorage();
  showTask();
}

// remover task
function removeTask(index) {
  tasks.splice(index, 1);
  saveTaskLocalStorage();
  showTask();
}

// salvar no localstorage
function saveTaskLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// pegar as tarefas no localstorage
function getTasks() {
  const tasksLocalStorage = localStorage.getItem("tasks");

  if (tasksLocalStorage) {
    tasks = JSON.parse(tasksLocalStorage);
  }
  showTask();
}

getTasks();
