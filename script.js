function createTask(text){
  let task = document.createElement("li");
  task.className = "task";
  task.innerText = text;
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
setButtonToAddTask();
