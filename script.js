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
  for (let i = 0; i < li.length; i += 1) {
    li[i].parentNode.removeChild(li[i]);
  }
}
function setupAddButton() {
  const addBt = document.getElementById('criar-tarefa');
  addBt.addEventListener('click', addTask);
}
function setupDeleteButton() {
  const delBt = document.getElementById('apaga-tudo');
  delBt.addEventListener('click', deleteTasks);
}
function setupDeleteDoneButton() {
  const delDoneBt = document.getElementById('remover-finalizados');
  delDoneBt.addEventListener('click', deleteDoneTasks);
}
window.onload = function startPage() {
  setupAddButton();
  setupDeleteButton();
  setupDeleteDoneButton();
};
