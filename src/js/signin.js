// pegar os dados
const loginForm = document.querySelector(".form-signin");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLocalStorage();
});

function validateLocalStorage() {
  const loginEmail = document.querySelector("#email");
  const loginPassword = document.querySelector("#password");
  const loginMsgAlert = document.querySelector("#form-msg");
  let userCadastro = [];
  let userValid = {
    email: "",
    password: "",
    username: "",
  };
  // valida se os dados estão preenchidos
  if (loginEmail.value == "" || loginPassword.value == "") {
    loginMsgAlert.innerHTML = "Preencha todos os campos corretamente!";
  }

  // busca os usuários cadastrados no localstorage
  userCadastro = JSON.parse(localStorage.getItem("userCadastro"));
  console.log(userCadastro);

  // compara os dados informados com os dados no localstorage
  userCadastro.forEach((item) => {
    // se os dados forem compativeis, o objeto userValid é populado
    if (
      loginEmail.value === item.email &&
      loginPassword.value === item.password
    ) {
      userValid = {
        email: item.email,
        password: item.password,
        username: item.username,
      };
    }
  });
  if (
    loginEmail.value === userValid.email &&
    loginPassword.value === userValid.password
  ) {
    loginMsgAlert.setAttribute("style", "color: #2ecc71");
    loginMsgAlert.innerHTML = "Logado com sucesso";
    let token = Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);
    localStorage.setItem("userLogado", JSON.stringify(userValid));
    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 1500);
  } else {
    loginMsgAlert.innerHTML = "Preencha todos os campos corretamente!";
  }
}
