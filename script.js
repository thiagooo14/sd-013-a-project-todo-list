function createTask(text){
  let task = document.createElement("li");
  task.className = "task";
  task.innerText = text;
  setTaskToTurnGrey(task);
  setTaskToBeCompleted(task);
  return task;
}
function assignTaskToList(task){
  let list = document.querySelector("#lista-tarefas");
  list.appendChild(task);
}
function setButtonToAddTask(){
  let button = document.querySelector("#criar-tarefa");
  let input = document.querySelector("#texto-tarefa");
  button.addEventListener("click", function (event) {
    let text = input.value;
    let task = createTask(text);
    assignTaskToList(task);
    input.value = '';
  })
}
function unselectTasks(){
  let tasks = document.querySelectorAll(".task");
  for (let task of tasks) {
    task.classList.remove("selected");
  }
}
function setTaskToTurnGrey(task){
  task.addEventListener("click", function (event) {
    unselectTasks();
    event.target.classList.add("selected");
  })
}
function setTaskToBeCompleted(task){
  task.addEventListener("dblclick", function (event) {
    if(event.target.classList.contains("completed")){
      event.target.classList.remove("completed");
    }else{
      event.target.classList.add("completed");
    }
  })
}

setButtonToAddTask();
