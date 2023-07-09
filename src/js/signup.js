// pegar os dados formulário
const form = document.querySelector(".form-signup");
const username = document.querySelector("#cad-username");
const email = document.querySelector("#cad-email");
const password = document.querySelector("#cad-password");
const confirmPassword = document.querySelector("#cad-confirm-password");
const msgAlert = document.querySelector("#form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
function validateinputs() {
  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
}
function validateForm() {
  const formsControl = document.querySelectorAll(".form-control");

  let userCadastro = JSON.parse(localStorage.getItem("userCadastro") || "[]");
  userCadastro.push({
    username: username.value,
    email: email.value,
    password: password.value,
  });

  const formIsValid = [...formsControl].every((formsControl) => {
    return formsControl.className === "form-control success";
  });

  if (formIsValid) {
    msgAlert.setAttribute("style", "color: #2ecc71");
    msgAlert.innerHTML = "Enviando dados";
    localStorage.setItem("userCadastro", JSON.stringify(userCadastro));
    setTimeout(() => {
      window.location.href = "./signin.html";
    }, 1500);
  } else {
    msgAlert.innerHTML = "Preencha todos os campos corretamente!";
  }
}
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

function validateUsername() {
  const usernameValue = username.value;

  if (usernameValue.length < 3) {
    setError(username, "o usuário precisa ter no mínimo 3 caracteres");
  } else {
    setSuccess(username, "Nome");
  }
}

function validateEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    setError(email, "O e-mail é obrigatório");
  } else if (!emailIsValid(emailValue)) {
    setError(email, "E-mail inválido");
  } else {
    setSuccess(email, "Email");
  }
}
function validatePassword() {
  const passwordValue = password.value;

  if (passwordValue.length < 8) {
    setError(password, "a senha precisa ter no mínimo 8 caracteres");
  } else {
    setSuccess(password, "Senha");
  }
}
function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value;
  const passwordValue = password.value;

  if (passwordValue !== confirmPasswordValue) {
    setError(confirmPassword, "As senhas não conferem");
  } else {
    setSuccess(confirmPassword, "Confirme sua senha");
  }
}

function setError(input, msg) {
  const formControl = input.parentElement;
  const label = formControl.querySelector("label");
  label.innerText = msg;
  formControl.className = "form-control error";
}

function setSuccess(input, msg) {
  const formControl = input.parentElement;
  const label = formControl.querySelector("label");
  formControl.className = "form-control success";
  label.innerText = msg;
}

function emailIsValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
