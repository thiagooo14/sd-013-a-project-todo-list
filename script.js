const input = document.querySelector('texto-tarefa')
const blocoTarefa = document.getElementById('lista-tarefas')
const inputZerado = ""

const botaoAddTarefa = document.getElementById('criar-tarefa')

function adicionarTarefa () {
  const listaTarefas = document.createElement('li')
  listaTarefas.innerHTML = document.getElementById('texto-tarefa').value
  listaTarefas.className = 'tarefa'
  blocoTarefa.appendChild(listaTarefas)
  document.getElementById('texto-tarefa').value = inputZerado
};

const tarefas = document.getElementsByClassName('tarefa')
const listaTarefass = document.getElementById('lista-tarefas')

function selecionarTarefa (event) {
  const el = event;
  for(const tarefa of tarefas) {
    if(event.target.className.startsWith('tarefa')) {
      tarefa.removeAttribute('style');
      tarefa.removeAttribute('id');
    }
    if (event.target.className.startsWith('tarefa')) {
      el.target.style.backgroundColor = 'rgb(128, 128, 128)';
      el.target.id = 'selected'
    }
  }
};

function tarefaCompleta (event) {
  event.target.classList.toggle('completed')
}

const apagarTudo = document.querySelector('#apaga-tudo')

function apagaTudo () {
  blocoTarefa.innerHTML = inputZerado;
};

function removerCompletos () {
  const tarefasCompletas = document.querySelectorAll('.completed') 
  for(let index = 0; index < tarefasCompletas.length; index++) {
    blocoTarefa.removeChild(tarefasCompletas[index])
  }
}

const removerCompleto = document.querySelector('#remover-finalizados')

function selecionarUma (event) {
  const tarefasSelecionadas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefasSelecionadas.length; index ++) {
    tarefasSelecionadas[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function removeSelecionado () {
  const selected = document.querySelector('#selected');
  if (selected !== null) {
    selected.remove();
  };
}
const removerSelecionado = document.getElementById('remover-selecionado');

function moverPraCima() {
  const selected = document.querySelector('#selected');
  if(selected !== null && selected !== blocoTarefa.firstElementChild) {
    blocoTarefa.insertBefore(selected, selected.previousSibling)
  }
}
const moverCima = document.querySelector('#mover-cima');

function moverPraBaixo () {
  const selected = document.querySelector('#selected');
  if (selected !== null && selected !== blocoTarefa.lastElementChild) { 
    blocoTarefa.insertBefore(selected.nextElementSibling, selected)
  }
}
const moverBaixo = document.querySelector('#mover-baixo');

function salvarTarefas () {
  const salvo = blocoTarefa.innerHTML
  localStorage.setItem('lista', salvo)
}

function chamarSalvos () {
  const lista = localStorage.getItem('lista')
  if(lista !== null) {
    blocoTarefa.innerHTML = lista
  }
}

const botaoSalvarTarefa = document.querySelector('#salvar-tarefas')


window.onload = () => {
  botaoAddTarefa.addEventListener('click', adicionarTarefa);
  listaTarefass.addEventListener('click', selecionarTarefa);
  listaTarefass.addEventListener('dblclick', tarefaCompleta);
  apagarTudo.addEventListener('click', apagaTudo);
  removerCompleto.addEventListener('click', removerCompletos);
  botaoAddTarefa.addEventListener('click', salvarTarefas);
  removerSelecionado.addEventListener('click', removeSelecionado);
  moverCima.addEventListener('click', moverPraCima);
  chamarSalvos ();
  moverBaixo.addEventListener('click', moverPraBaixo);
}
