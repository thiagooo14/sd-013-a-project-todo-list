var input = document.getElementById('texto-tarefa');
var button = document.getElementById('criar-tarefa');
var ol = document.querySelector('ol');
var clear = document.getElementById('apaga-tudo');
var done = document.getElementsByClassName('completed');
var remove = document.getElementById('remover-finalizados');

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  li.setAttribute('onclick', 'oneClick()');
  li.setAttribute('ondblclick', 'dblClick()')
  ol.appendChild(li);
  input.value = '';
}

function addListClick() {
  if (input.value.length > 0) {
  createListElement();
  }
}

function addListEnter(e) {
  if (input.value.length > 0 && e.key === 'Enter') {
  createListElement();
  }
}

function oneClick() {
  var li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].classList.remove('bgc');
  }
  event.target.classList.toggle('bgc');
}

function dblClick() {
  event.target.classList.toggle('completed');
}

function clearAll() {
  var li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    ol.removeChild(li[i]);
  }
}

function removeDone() {
  var li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains('completed')) {
      ol.removeChild(li[i]);
    }
  }
}

button.addEventListener('click', addListClick);

input.addEventListener('keypress', addListEnter);

clear.addEventListener('click', clearAll);

remove.addEventListener('click', removeDone);
