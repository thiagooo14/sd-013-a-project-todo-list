const CriarTarefaBtn = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function selecionaItem(event) {
  document.querySelector('#selected').style.backgroundColor = 'white';
  document.querySelector('#selected').removeAttribute('id');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.id = 'selected';
}

function addTarefa() {
  const li = document.createElement('li');
  li.classList.add('tarefa');
  li.addEventListener('click', selecionaItem);
  ol.appendChild(li);
  const tarefa = document.querySelector('#texto-tarefa');
  li.innerText = tarefa.value;
  tarefa.value = '';
  tarefa.focus();
}

CriarTarefaBtn.addEventListener('click', addTarefa);
