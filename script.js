const botao = document.createElement('button');
const tasks = document.querySelector('#tasks');
const ol = document.createElement('ol');
const input = document.querySelector('#texto-tarefa');
let texto = '';
const botaoDelete = document.createElement('button');
const tools = document.querySelector('#tools');
const botaoFinalizados = document.createElement('button');
const botaoSave = document.createElement('button');
const botaoExcluir = document.createElement('button');
const botaoUp = document.createElement('button');
const botaoDown = document.createElement('button');

ol.id = 'lista-tarefas';
botao.id = 'criar-tarefa';
botao.innerText = 'Criar tarefa';
botaoDelete.id = 'apaga-tudo';
botaoDelete.innerText = 'Apagar tarefas';
botaoFinalizados.innerText = 'Remover finalizadas';
botaoFinalizados.id = 'remover-finalizados';
botaoSave.id = 'salvar-tarefas';
botaoSave.innerText = 'Salvar lista';
botaoExcluir.id = 'remover-selecionado';
botaoExcluir.innerText = 'Excluir';
botaoUp.id = 'mover-cima';
botaoUp.innerText = '↑';
botaoDown.id = 'mover-baixo';
botaoDown.innerText = '↓';
tools.appendChild(botaoUp);
tools.appendChild(botaoDown);
tools.appendChild(botaoExcluir);
tools.appendChild(botaoSave);
tools.appendChild(botaoDelete);
tools.appendChild(botaoFinalizados);
tasks.appendChild(botao);
tasks.appendChild(ol);

function criaLi() {
  const li = document.createElement('li');
  li.innerText = texto;
  li.className = 'item';
  ol.appendChild(li);
  input.value = '';
  texto = '';
}

function textoTarefa(event) {
  texto = event.target.value;
}

function mudaCor(event) {
  const li = document.getElementsByTagName('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].setAttribute('id', 'unselected');
  }
  event.target.setAttribute('id', 'selected');
  ol.setAttribute('id', 'lista-tarefas');
}

function completed(event) {
  if (event.target.className !== 'item') {
    event.target.setAttribute('class', 'item');
  } else {
    event.target.setAttribute('class', 'item completed');
  }
  ol.setAttribute('class', 'lista');
}

function apagarTarefas() {
  const li = document.querySelectorAll('.item');
  for (let i = 0; i < li.length; i += 1) {
    ol.removeChild(li[i]);
  }
}

function apagarFinalizadas() {
  const finalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    ol.removeChild(finalizados[i]);
  }
}

function salvarLista() {
  localStorage.setItem('tarefas', ol.innerHTML);
}

function recuperarLista() {
  const tarefas = localStorage.getItem('tarefas');
  ol.innerHTML = tarefas;
}

function excluirSelecionado() {
  const selected = document.querySelector('#selected');
  ol.removeChild(selected);
}

function up() {
  const elem = document.querySelector('#selected');
  if (elem !== null && elem.previousElementSibling !== null) {
    ol.insertBefore(elem, elem.previousElementSibling);
  }
}

function down() {
  const elem = document.querySelector('#selected');

  if (elem !== null && elem.nextElementSibling !== null) {
    ol.insertBefore(elem.nextElementSibling, elem);
  }
}

recuperarLista();

botao.addEventListener('click', criaLi);
input.addEventListener('keyup', textoTarefa);
ol.addEventListener('click', mudaCor);
ol.addEventListener('dblclick', completed);
botaoDelete.addEventListener('click', apagarTarefas);
botaoFinalizados.addEventListener('click', apagarFinalizadas);
botaoSave.addEventListener('click', salvarLista);
botaoExcluir.addEventListener('click', excluirSelecionado);
botaoDown.addEventListener('click', down);
botaoUp.addEventListener('click', up);
