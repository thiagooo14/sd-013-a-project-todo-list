const CriarTarefaBtn = document.querySelector('#criar-tarefa');
const apagaBtn = document.querySelector('#remover-finalizados');
const apagaTudoBtn = document.querySelector('#apaga-tudo');
const ol = document.querySelector('#lista-tarefas');

function selecionaItem(event) {
  const evenTarget = event.target;
  document.querySelector('#selected').style.backgroundColor = 'white';
  document.querySelector('#selected').removeAttribute('id');
  evenTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  evenTarget.id = 'selected';
}

function completed(event) {
  const evenTarget = event.target;
  evenTarget.classList.toggle('completed');
}

function addTarefa() {
  const li = document.createElement('li');
  li.classList.add('tarefa');
  li.addEventListener('click', selecionaItem);
  li.addEventListener('dblclick', completed);
  ol.appendChild(li);
  const tarefa = document.querySelector('#texto-tarefa');
  li.innerText = tarefa.value;
  tarefa.value = '';
  tarefa.focus();
}

function apagaConc() {
  const completedList = document.querySelectorAll('.completed');
  for (let i = 0; i < completedList.length; i += 1) {
    completedList[i].remove();
  }
}

function apagaTudo() {
  ol.innerText = '';
  document.querySelector('.campo').id = 'selected';
}

CriarTarefaBtn.addEventListener('click', addTarefa);
apagaBtn.addEventListener('click', apagaConc);
apagaTudoBtn.addEventListener('click', apagaTudo);
