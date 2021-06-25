 const inputTarefas = document.getElementById("texto-tarefa");
 const taskList = document.getElementById("lista-tarefas");
 const createButton = document.getElementById("criar-tarefa");
 const clearButton = document.getElementById("apaga-tudo");
 const readyClearButton = document.getElementById("remover-finalizados");
 const selectedClearButton = document.getElementById("remover-selecionado");
 const saveButton = document.getElementById("salvar-tarefas")

 createButton.addEventListener("click",createTask);
 taskList.addEventListener("click", changeColor)
 taskList.addEventListener("dblclick",strikeTask);
 clearButton.addEventListener("click",clearAll)
 readyClearButton.addEventListener("click",clearStrike)
 selectedClearButton.addEventListener("click",selectedClear)
 saveButton.addEventListener("click", saveTask)

 function createTask(){
     let task = document.createElement("li");
     task.innerText = inputTarefas.value;
     task.className = "tarefas"
     taskList.appendChild(task);
     inputTarefas.value = "";
 }

 function changeColor(originEvent){
    for(let i=0; i<taskList.childNodes.length; i++){
        taskList.childNodes[i].style.backgroundColor = "white"
    }
    originEvent.target.style.backgroundColor = "rgb(128, 128, 128)";
     
 }

 function strikeTask(originEvent2){
     if (originEvent2.target.style.textDecoration === "line-through"){
        originEvent2.target.style.textDecoration = "none"
        originEvent2.target.className = "tarefas"
     }else{
        originEvent2.target.style.textDecoration = "line-through"
        originEvent2.target.className = "completed"
     }
 }

 function clearAll (){
   const allTasks = document.querySelectorAll('li');
    for(let i=0; i<allTasks.length; i++){
        let taskToRemove = allTasks[i]
        taskList.removeChild(taskToRemove)
    }
 }

 function clearStrike (){
    const allTasks = document.querySelectorAll('li');
     for(let i=0; i<allTasks.length; i++){
         let taskToRemove = allTasks[i]
         if (taskToRemove.style.textDecoration === "line-through"){
            taskList.removeChild(taskToRemove)
         }
         
     }
  }

  function selectedClear (){
    const allTasks = document.querySelectorAll('li');
    for(let i=0; i<allTasks.length; i++){
        let taskToRemove = allTasks[i]
        if (taskToRemove.style.backgroundColor === "rgb(128, 128, 128)"){
           taskList.removeChild(taskToRemove)
        }
        
    }
  }

  function saveTask(){
    const htmlista = taskList.innerHTML;
    localStorage.setItem('savedList', htmlista);
  }

  function recover() {
    const savedList = localStorage.getItem('savedList');
    taskList.innerHTML = savedList;
  }

  recover()
