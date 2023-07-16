const loginForm = document.querySelector(".form-signin");
const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginMsgAlert = document.querySelector("#form-msg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLocalStorage();
});

function validateLocalStorage() {
  const userCadastro = JSON.parse(localStorage.getItem("userCadastro")) || [];

  if (loginEmail.value === "" || loginPassword.value === "") {
    loginMsgAlert.innerHTML =
      "Por favor, preencha todos os dados corretamente!";
    return;
  }

  let userValid = null;

  if (userCadastro.length === 0) {
    loginMsgAlert.innerHTML = "Você não está cadastrado. Cadastre-se!";
    window.location.href = "./signup.html";
  } else {
    userCadastro.forEach((item) => {
      if (
        loginEmail.value === item.email &&
        loginPassword.value === item.password
      ) {
        userValid = {
          email: item.email,
          password: item.password,
          username: item.username,
          data: new Date().toLocaleString(),
        };
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem("token", token);
        localStorage.setItem("userLogado", JSON.stringify(userValid));
        window.location.href = "../../index.html";
      }
    });
    if (!userValid) {
      loginMsgAlert.innerHTML = "Email ou senha incorretos. Tente novamente!";
    }
  }
}
