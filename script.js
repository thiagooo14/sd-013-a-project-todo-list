function clearInput() {
  const inputElement = document.getElementById('texto-tarefa');
  inputElement.value = '';
}
function setupTaskLineStyle(event) {
  const element = event.target;
  element.style.backgroundColor = 'rgb(128,128,128)';
}
function addTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  const newLine = document.createElement('li');
  newLine.innerText = inputText;
  newLine.addEventListener('click', setupTaskLineStyle);
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
