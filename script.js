function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}
function setupTaskClick(event) {
  const currentSelectedTask = document.getElementsByClassName('selected')[0];
  const element = event.target;
  if (currentSelectedTask != undefined) {
    currentSelectedTask.classList.toggle('selected');
  }
  element.classList.toggle('selected');
}
function addTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  const newLine = document.createElement('li');
  newLine.innerText = inputText;
  newLine.addEventListener('click', setupTaskClick);
  orderedList.appendChild(newLine);
  clearInput();
}
function setupAddButton() {
  const addBt = document.getElementById('criar-tarefa');
  addBt.addEventListener('click', addTask);
}
window.onload = function startPage() {
  setupAddButton();
};
