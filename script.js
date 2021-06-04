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
function setupAddButton() {
  const addBt = document.getElementById('criar-tarefa');
  addBt.addEventListener('click', addTask);
}
window.onload = function startPage() {
  setupAddButton();
};
