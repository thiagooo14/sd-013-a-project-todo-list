// Requisitos 5 e 6

const toDoList = document.getElementById("lista-tarefas");
const button = document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");

function newToDo() {
    const newLi = document.createElement("li");
    newLi.classList.add("toDoItens")
    newLi.innerText = input.value;
    toDoList.appendChild(newLi);
    input.value = null;
    // Adicionados para os requisitos 7 e 8
    newLi.addEventListener("click", toDoSelection);
    // newLi.addEventListener("dblclick", )
}

button.addEventListener("click", newToDo);
input.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        button.click();
    }
})

// Requisito 7

function toDoSelection(event) {
    const toDoItens = document.getElementsByClassName("toDoItens");
    for (let index = 0; index < toDoItens.length; index += 1) {
        if (toDoItens[index].classList.contains("selected")) {
            toDoItens[index].classList.remove("selected");
        }
    }
    event.target.classList.add("selected");
}

