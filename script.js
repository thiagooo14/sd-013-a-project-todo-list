const list = document.querySelector("#lista-tarefas");
const tasks = list.children;
function createTask(text){
  let task = document.createElement("li");
  task.className = "task";
  task.innerText = text;
  setTaskToTurnGrey(task);
  setTaskToBeCompleted(task);
  return task;
}
function assignTaskToList(task){
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
function deleteList(){
  list.innerHTML = '';
}
function setDeleteList(){
  let button = document.querySelector("#apaga-tudo");
  button.addEventListener("click", function (event) {
    deleteList();
  })
}
function deleteCompleted(){
  for(let task of tasks){
    if(task.classList.contains("completed")){
      task.parentNode.removeChild(task);
    }
  }
}
function setDeleteCompleted(){
  let button = document.querySelector("#remover-finalizados");
  button.addEventListener("click", function (event) {
    deleteCompleted();
  })
}
function saveList(){
  let list = document.querySelector(("#lista-tarefas"));
  let listHtml = list.innerHTML;
  localStorage.setItem("savedList", listHtml);
}
function setSaveList(){
  let button = document.querySelector("#salvar-tarefas");
  button.addEventListener("click", function (event) {
    saveList();
  })
}
// Como a lista carregada não cria os itens de maneira convencional
// eles não possuem as acões de mudar de cor ou serem finalizados
// esta funcão faz isto
function setActionToTasks(tasks){
  for(let task of tasks){
    setTaskToTurnGrey(task);
    setTaskToBeCompleted(task);
  }
}
function loadList(){
  let list = document.querySelector(("#lista-tarefas"));
  let savedList = localStorage.getItem("savedList");
  if(savedList !== undefined){
    list.innerHTML = savedList;
    setActionToTasks(list.children);
  }
}
function moveUp(){
  if(tasks[0] === undefined){
    alert("Nenhuma Tarefa na Lista!");
    return;
  }
  if(tasks[0].classList.contains("selected")){
    alert("Tarefa na primeira posição já!");
    return;
  }
  for(let i = 1; i < tasks.length; i += 1){
    if(tasks[i].classList.contains("selected")){
      // Função pesquisada em https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
      list.insertBefore(tasks[i], tasks[i - 1]);
      return;
    }
  }
  alert("Nenhum item selecionado!");
}
function setMoveUp(){
  let button = document.querySelector("#mover-cima");
  button.addEventListener("click", function (event) {
    moveUp();
  })
}
function moveDown(){
  if(tasks[0] === undefined){
    alert("Nenhuma Tarefa na Lista!");
    return;
  }
  if(tasks[tasks.length - 1].classList.contains("selected")){
    alert("Tarefa na última posição já!");
    return;
  }
  for(let i = 0; i < tasks.length - 1; i += 1){
    if(tasks[i].classList.contains("selected")){
      // Função pesquisada em https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
      list.insertBefore(tasks[i + 1], tasks[i]);
      return;
    }
  }
  alert("Nenhum item selecionado!");
}
function setMoveDown(){
  let button = document.querySelector("#mover-baixo");
  button.addEventListener("click", function (event) {
    moveDown();
  })
}
function removeSelected(){
  if(tasks[0] === undefined){
    alert("Nenhuma tarefa adicionada!");
    return;
  }
  for(let task of tasks){
    if(task.classList.contains("selected")){
      list.removeChild(task);
      return;
    }
  }
  alert("Nenhuma tarefa selecionada!");
}
function setRemoveSelected(){
  let button = document.querySelector("#remover-selecionado");
  button.addEventListener("click", function (event) {
    removeSelected();
  })
}
window.onload = function() {
  setDeleteCompleted();
  setDeleteList();
  setButtonToAddTask();
  setSaveList();
  setMoveUp();
  setMoveDown();
  setRemoveSelected();
  loadList();
}