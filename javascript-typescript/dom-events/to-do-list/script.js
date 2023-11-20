function handleSubmit(event) {
  // função de realizar um evento ao submeter
  event.preventDefault(); //para que não recarregue a página

  const inputField = document.getElementById("input-name");
  let value = inputField.value; // pega o valor

  if (value === "") {
    //se não for colocado nada no form, é falso
    alert("Por favor adicione uma tarefa");
    return;
  }

  const todoList = document.getElementById("todo-list");

  const liElem = document.createElement("li"); //criar uma lista nova
  const labelElem = document.createElement("label"); //criar uma label nova
  const checkboxElem = document.createElement("input"); //criar um input novo
  checkboxElem.setAttribute("type", "checkbox"); //adicionar o atributo à checkbox

  checkboxElem.addEventListener("click", function () {
    // ao clicar na checkbox muda o estilo
    if (checkboxElem.checked) {
      labelElem.style.textDecoration = "line-through";
    } else {
      labelElem.style.textDecoration = "none";
    }
  });

  labelElem.textContent = value; //a label tem o valor do que foi escrito no campo do formulário
  liElem.appendChild(checkboxElem); //é colocado no fim da lista
  liElem.appendChild(labelElem); //é colocado no fim da lista

  todoList.appendChild(liElem);

  inputField.value = "";
}

const form = document.getElementById("form"); //declarar a var do formulário
form.addEventListener("submit", handleSubmit); // "ouve" que ao clicar o evento é iniciado
