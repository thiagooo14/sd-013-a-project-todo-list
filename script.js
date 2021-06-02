const listaTarefas = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');
const botaoApagar = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizadas = document.querySelector('#remover-finalizados');
const botaoRemoveSelec = document.querySelector('#remover-selecionado');

function removeSelect() {
  listaTarefas.removeChild(document.querySelector('.selected'));
}

function apagaFinalizadas() {
  const listaCompletas = document.getElementsByClassName('completed');
  let tamanhoOriginal = listaCompletas.length;
  console.log(listaCompletas);
  for (let i = 0; i < tamanhoOriginal; i += 1) {
    listaTarefas.removeChild(document.querySelector('.completed'));
  }
  tamanhoOriginal = 0;
}

function completarTarefa(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
function apagaLista() {
  let tamanhoDalista = listaTarefas.children.length;
  for (let i = 0; i < tamanhoDalista; i += 1) {
    listaTarefas.removeChild(listaTarefas.lastElementChild);
  }
  tamanhoDalista = 0;
}

function trocaCorTarefa(event) {
  const unicacor = document.querySelectorAll('li');
  for (let i = 0; i < unicacor.length; i += 1) {
    unicacor[i].style.backgroundColor = '';
    unicacor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function criarTarefa() {
  const li = document.createElement('li');
  li.innerText = input.value;
  input.value = null;
  li.addEventListener('click', trocaCorTarefa);
  li.addEventListener('dblclick', completarTarefa);
  listaTarefas.appendChild(li);
}

botaoAdicionar.addEventListener('click', criarTarefa);
botaoApagar.addEventListener('click', apagaLista);
botaoRemoveFinalizadas.addEventListener('click', apagaFinalizadas);
botaoRemoveSelec.addEventListener('click', removeSelect);
