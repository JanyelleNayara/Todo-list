let formLogin = document.querySelector("#form-login");
console.log(formLogin);

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  let msgLogin = document.querySelector("#msg-login");
  let loginEmail = document.querySelector("#login-email");
  let loginSenha = document.querySelector("#login-password");
  let userCadastro = [];
  let userValid = {
    nome: "",
    email: "",
    senha: "",
  };

  if (loginEmail.value == "" || loginSenha.value == "") {
    msgLogin.setAttribute("style", "color: red; display: block");
    msgLogin.innerHTML = "Preencha os dados corretamente";
  }

  userCadastro = JSON.parse(localStorage.getItem("userCadastro"));

  userCadastro.forEach((item) => {
    if (loginEmail.value == item.email && loginSenha.value == item.senha) {
      userValid = {
        nome: item.nome,
        email: item.email,
        senha: item.senha,
      };
    }
  });

  if (
    loginEmail.value == userValid.email &&
    loginSenha.value == userValid.senha
  ) {
    console.log("certinho");
    msgLogin.setAttribute("style", "color: green; display: block");
    msgLogin.innerHTML = "Logado com sucesso";

    let token = Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);
    localStorage.setItem("userLogado", JSON.stringify(userValid));

    window.location.href = "../tarefas.html";
  } else {
    console.log("preencha os dados corretamente");
    msgLogin.setAttribute("style", "color: red; display: block");
    msgLogin.innerHTML = "Preencha os dados corretamente";
  }
});
