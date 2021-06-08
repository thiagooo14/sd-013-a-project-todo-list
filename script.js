const toDoList = document.getElementById("lista-tarefas");
const button = document.getElementById("criar-tarefa");
const toDo = document.getElementById("texto-tarefa");


function newToDo() {
    const newLi = document.createElement("li");
    newLi.innerHTML = toDo.value;
    toDoList.appendChild(newLi);
    toDo.value = null;
}

button.addEventListener("click", newToDo);