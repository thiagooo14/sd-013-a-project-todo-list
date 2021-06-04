function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}
function setupTaskDubleClick(event) {
  const element = event.target;
  element.classList.toggle('completed');
}
function setupTaskClick(event) {
  const currentSelectedTask = document.getElementsByClassName('selected')[0];
  const element = event.target;
  if (currentSelectedTask !== undefined) {
    currentSelectedTask.classList.toggle('selected');
  }
  element.classList.toggle('selected');
}
function addTaskEvents(task) {
  task.addEventListener('click', setupTaskClick);
  task.addEventListener('dblclick', setupTaskDubleClick);
}
function addTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  if (inputText === '') return;
  const orderedList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = inputText;
  addTaskEvents(newTask);
  orderedList.appendChild(newTask);
  clearInput();
}
function deleteTasks() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
function deleteDoneTasks() {
  const li = document.querySelectorAll('.completed');
  console.log(li);
  for (let i = 0; i < li.length; i += 1) {
    li[i].parentNode.removeChild(li[i]);
  }
}
function deleteSelectedTask() {
  const li = document.querySelector('.selected');
  console.log(li);
  if (li === null) return;
  li.parentNode.removeChild(li);
}
function configButtonClick(idButton, func) {
  document.getElementById(idButton).addEventListener('click', func);
}
window.onload = function startPage() {
  configButtonClick('criar-tarefa', addTask);
  configButtonClick('remover-selecionado', deleteSelectedTask);
  configButtonClick('apaga-tudo', deleteTasks);
  configButtonClick('remover-finalizados', deleteDoneTasks);
};
