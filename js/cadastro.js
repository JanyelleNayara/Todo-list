let formCadastro = document.querySelector("#form-cadastro");
let buttonCadastro = document.querySelector("#button-cadastro");

let cadNome = document.querySelector("#cad-name");
let cadLabelNome = document.querySelector("#label-cad-name");
let cadNomeValid = false;

let cadEmail = document.querySelector("#cad-email");
let cadLabelEmail = document.querySelector("#label-cad-email");
let cadEmailValid = false;

let cadSenha = document.querySelector("#cad-senha");
let cadlabelSenha = document.querySelector("#label-cad-senha");
let cadSenhaValid = false;

let cadConfirmSenha = document.querySelector("#cad-confirm-senha");
let cadlabelConfirmSenha = document.querySelector("#label-cad-confirm-senha");
let cadConfirmSenhaValid = false;

let msgCadastro = document.querySelector("#msg-cadastro");

cadNome.addEventListener("keyup", () => {
  if (cadNome.value.length < 3) {
    cadLabelNome.setAttribute("style", "display: block; color: red");
    cadLabelNome.innerHTML = "Digite um nome com três caracteres ou mais";
  } else {
    cadLabelNome.setAttribute("style", "display: block");
    cadNome.setAttribute("style", "border-bottom: 1px solid green");
    cadLabelNome.innerHTML = "";
    cadNomeValid = true;
  }
});
cadEmail.addEventListener("keyup", () => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(cadEmail.value)) {
    cadLabelEmail.setAttribute("style", "display: block");
    cadEmail.setAttribute("style", "border-bottom: 1px solid green");
    cadLabelEmail.innerHTML = "";
    cadEmailValid = true;
  } else {
    cadLabelEmail.setAttribute("style", "display: block; color: red");
    cadEmail.setAttribute("style", "border-bottom: 1px solid red");
    cadLabelEmail.innerHTML = "Digite um email válido";
  }
});
cadSenha.addEventListener("keyup", () => {
  if (cadSenha.value.length < 8) {
    cadlabelSenha.setAttribute("style", "display: block; color: red");
    cadSenha.setAttribute("style", "border-bottom: 1px solid red");
    cadlabelSenha.innerHTML = "Digite uma senha com no mínimo 8 caracteres";
  } else {
    cadlabelSenha.setAttribute("style", "display: block");
    cadSenha.setAttribute("style", "border-bottom: 1px solid green");
    cadlabelSenha.innerHTML = "";
    cadSenhaValid = true;
  }
});
cadConfirmSenha.addEventListener("keyup", () => {
  if (cadConfirmSenha.value != cadSenha.value) {
    cadlabelConfirmSenha.setAttribute("style", "display: block; color: red");
    cadConfirmSenha.setAttribute("style", "border-bottom: 1px solid red");
    cadlabelConfirmSenha.innerHTML = "As senhas não conferem";
  } else {
    cadlabelConfirmSenha.setAttribute("style", "display: block");
    cadConfirmSenha.setAttribute("style", "border-bottom: 1px solid green");
    cadlabelConfirmSenha.innerHTML = "";
    cadConfirmSenhaValid = true;
  }
});

buttonCadastro.addEventListener("click", (e) => {
  e.preventDefault();
  if (cadNomeValid && cadEmailValid && cadSenhaValid && cadConfirmSenhaValid) {
    let userCadastro = 
    JSON.parse(localStorage.getItem("userCadastro") || "[]");
    userCadastro.push({
      nome: cadNome.value,
      email: cadEmail.value,
      senha: cadSenha.value,
    });
    localStorage.setItem("userCadastro", JSON.stringify(userCadastro));

    msgCadastro.setAttribute("style", "display: block; color: green");
    msgCadastro.innerHTML = "Dados cadastrados com sucesso";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1500);
  } else {
    msgCadastro.setAttribute("style", "display: block");
    msgCadastro.innerHTML = "Insira os dados corretamente";
  }
});
