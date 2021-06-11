// Requisitos 5 e 6

const toDoList = document.getElementById("lista-tarefas");
const btnNewToDo = document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");

function newToDo() {
  const newLi = document.createElement("li");
  newLi.classList.add("toDoItens");
  newLi.innerText = input.value;
  toDoList.appendChild(newLi);
  input.value = null;
  // Adicionados para os requisitos 7 à 9
  newLi.addEventListener("click", toDoSelection);
  newLi.addEventListener("dblclick", toDoCompleted);
}

btnNewToDo.addEventListener("click", newToDo);
input.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    btnNewToDo.click();
  }
})

// Requisitos 7 e 8

function toDoSelection(event) {
  const toDoItens = document.getElementsByClassName("toDoItens");
  for (let index = 0; index < toDoItens.length; index += 1) {
    if (toDoItens[index].classList.contains("selected")) {
      toDoItens[index].classList.remove("selected");
    }
  }
  event.target.classList.add("selected");
}

// Requisito 9

function toDoCompleted(event) {
  const toDoItens = document.getElementsByClassName("toDoItens");
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
}

// Requisito 10

const btnClearAll = document.getElementById("apaga-tudo");

function clearAll() {
  toDoList.innerHTML = null;
}

btnClearAll.addEventListener("click", clearAll);

// Requisito 11

const btnClearCompleted = document.getElementById("remover-finalizados");

function clearCompleted() {
  const toDoCompleted = document.querySelectorAll(".completed");
  for (let index = 0; index < toDoCompleted.length; index += 1) {
    toDoCompleted[index].remove();
  }
}

btnClearCompleted.addEventListener("click", clearCompleted);