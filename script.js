var input = document.getElementById('texto-tarefa');
var button = document.getElementById('criar-tarefa');
var ol = document.querySelector('ol');

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = '';
}

function addListClick() {
  if (input.value.length > 0) {
  createListElement();
  }
}

function addListEnter(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
  createListElement();
  }
}

button.addEventListener('click', addListClick);

input.addEventListener('keypress', addListEnter);
