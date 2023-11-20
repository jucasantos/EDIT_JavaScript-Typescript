function handleLogIn(event) {
  event.preventDefault();

  const inputName = document.getElementById("logName");
  const inputPass = document.getElementById("password");

  let valueName = inputName.value;
  let valuePass = inputPass.value;

  if (valueName !== valueName.indexOf("@") && valuePass < 6) {
    alert("Valores inválidos");
  } else {
    alert("Seja Bem-Vindo!");
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", handleLogIn);
