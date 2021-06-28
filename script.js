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
  const el = event;
  if(event.target.className == 'tarefa') {
    el.target.className = 'completed';
  } else if (event.target.className == 'tarefa completed') {
    el.target.className = 'tarefa';
  }
};

const apagarTudo = document.querySelector('#apaga-tudo')

function apagaTudo () {
  blocoTarefa.innerHTML = inputZerado;
};

function removerSelecionados () {
  const tarefasCompletas = document.querySelectorAll('.completed') 
  for(let index = 0; index < tarefasCompletas.length; index++) {
    blocoTarefa.removeChild(tarefasCompletas[index])
  }
}

const removerSelecionado = document.querySelector('#remover-finalizados');

window.onload = () => {
  botaoAddTarefa.addEventListener('click', adicionarTarefa);
  listaTarefass.addEventListener('click', selecionarTarefa);
  listaTarefass.addEventListener('dblclick', tarefaCompleta);
  apagarTudo.addEventListener('click', apagaTudo);
  removerSelecionado.addEventListener('click', removerSelecionados);
}
