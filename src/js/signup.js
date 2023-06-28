// pegar os dados formulário
const form = document.querySelector("#form-signup");
const buttonSignup = document.querySelector("#button-signup");

let username = document.querySelector("#cad-username");
let labelUsername = document.querySelector("#label-cad-username");

let email = document.querySelector("#cad-email");
let labelEmail = document.querySelector("#label-cad-email");

let password = document.querySelector("#cad-password");
let labelPassword = document.querySelector("#label-cad-password");

let confirmPassword = document.querySelector("#cad-confirm-password");
let labelConfirmPassword = document.querySelector(
  "#label-cad-confirm-password"
);

// validar username
function validateUsername() {
  if (username.value.length < 3) {
    labelUsername.setAttribute("style", "color: red");
    username.setAttribute("style", "border-bottom: 2px solid red");
    labelUsername.innerHTML = "O nome precisa ter no mínimo 3 caracteres";
  } else {
    username.setAttribute("style", "border-bottom: 2px solid green");
    labelUsername.setAttribute("style", "color: green");
    labelUsername.innerHTML = "Nome";
  }
}
// validar email
function validateEmail() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email.value)) {
    labelEmail.setAttribute("style", "color: red");
    email.setAttribute("style", "border-bottom: 2px solid red");
    labelEmail.innerHTML = "Preencha o email corretamente";
  } else {
    email.setAttribute("style", "border-bottom: 2px solid green");
    labelEmail.setAttribute("style", "color: green");
    labelEmail.innerHTML = "E-mail";

  }
}
// validar senha
function validatePassword() {
  if (password.value.length < 8) {
    labelPassword.setAttribute("style", "color: red");
    password.setAttribute("style", "border-bottom: 2px solid red");
    labelPassword.innerHTML = "A senha precisa ter no mínimo 8 caracteres";
  } else {
    password.setAttribute("style", "border-bottom: 2px solid green");
    labelPassword.setAttribute("style", "color: green");
    labelPassword.innerHTML = "Senha";
  }
}

// validar confirmasenha
function validateConfirmPassword() {
  if (
    confirmPassword.value.length < 8 ||
    confirmPassword.value !== password.value
  ) {
    labelConfirmPassword.setAttribute("style", "color: red");
    confirmPassword.setAttribute("style", "border-bottom: 2px solid red");
    labelConfirmPassword.innerHTML = "As senhas não coincidem";
  } else {
    confirmPassword.setAttribute("style", "border-bottom: 2px solid green");
    labelConfirmPassword.setAttribute("style", "color: green");
    labelConfirmPassword.innerHTML = "Confirme sua Senha";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
});
