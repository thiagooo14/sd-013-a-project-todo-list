const CriarTarefaBtn = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function selecionaItem(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
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
