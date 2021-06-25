 const inputTarefas = document.getElementById("texto-tarefa");
 const taskList = document.getElementById("lista-tarefas");
 const createButton = document.getElementById("criar-tarefa");

 createButton.addEventListener("click",createTask);
 taskList.addEventListener("click", changeColor)

 function createTask(){
     let task = document.createElement("li");
     task.innerText = inputTarefas.value;
     taskList.appendChild(task);
     inputTarefas.value = "";
 }

 function changeColor(originEvent){

     originEvent.target.style.backgroundColor = "rgb(128, 128, 128)";
     
 }