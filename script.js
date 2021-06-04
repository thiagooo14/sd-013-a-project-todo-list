function clearInput() {
  const inputElement = document.getElementById('texto-tarefa');
  inputElement.value = '';
}
function addTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  let newLine = document.createElement('li');
  newLine.innerText = inputText;
  newLine.addEventListener('click', setupTaskLineStyle);
  orderedList.appendChild(newLine);
  clearInput();
}
function setupTaskLineStyle(event) {
  let element = event.target;
  element.style.backgroundColor = 'rgb(128,128,128)';
}
function setupAddButton() {
  const addBt = document.getElementById('criar-tarefa');
  addBt.addEventListener('click', addTask);
}
window.onload = function startPage() {
  setupAddButton();
};