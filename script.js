function clickAddTarefa() {
  let input = document.getElementById("texto-tarefa");
  let texto = input.value;
  let li = document.createElement("li");
  li.addEventListener("click", clickMudaCorFundo);
  li.addEventListener("dblclick", dblclickLista);
  li.classList.add("rmv");
  li.innerHTML = texto;
  document.getElementById("lista-tarefas").appendChild(li);
  input.value = "";
}

function clickMudaCorFundo(event) {
  const elemento = document.querySelector(".selected");
  if(elemento != null){
    elemento.classList.remove("selected");
  }
  event.target.classList.add("selected");
}

function dblclickLista(event) {
  let elemento = event.target;
  if(elemento.classList.contains("completed")) {
    elemento.classList.remove("completed");
  } else {
    elemento.classList.add("completed")
  }
}

function clickApagaLista() {
  let li = document.querySelectorAll(".rmv");
  let ol = document.getElementById("lista-tarefas");
  for(let indice = 0; indice < li.length; indice += 1) {
    ol.removeChild(li[indice]);
  }
}

function clickApagaFinalizados() {
  let completos = document.querySelectorAll(".completed");
  let ol = document.getElementById("lista-tarefas");
  for(let indice = 0; indice < completos.length; indice += 1) {
    ol.removeChild(completos[indice]);
  }
}

function addEventoClick() {
  const buttonAdd = document.getElementById("criar-tarefa");
  buttonAdd.addEventListener("click", clickAddTarefa);
  let remover = document.getElementById("apaga-tudo");
  remover.addEventListener("click", clickApagaLista);
  let removerCompleted = document.getElementById("remover-finalizados");
  removerCompleted.addEventListener("click", clickApagaFinalizados);
}

addEventoClick();