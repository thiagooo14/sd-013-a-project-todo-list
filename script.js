// Elementos
const elementButtonCriarTarefa = document.getElementById('criar-tarefa');
const elementOl = document.getElementById('lista-tarefas');
let elementLi = document.getElementsByClassName('tarefa');
const elementTarefa = document.getElementById('texto-tarefa');


const pegaListaTarefas = localStorage.getItem('tarefas')
const listaTarefas = document.querySelector('#lista-tarefas');
listaTarefas.innerHTML = pegaListaTarefas;

// Eventos
elementButtonCriarTarefa.addEventListener('click', criaTarefa)

//Funções
function criaTarefa() {
  const item = document.createElement('li');
  item.className = 'tarefa'
  item.innerHTML = elementTarefa.value;
  elementOl.appendChild(item);
  elementTarefa.value = null;

  item.addEventListener('dblclick', function () {
    completaTarefa(item); /* completedItem */
  });
  
  item.addEventListener('click', function () {
    selecionaTarefa(item); /* selectedItem */
  });
}

function selecionaTarefa(item) {
  if (document.getElementsByClassName('selected')[0] != null) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
  }
  item.classList.add('selected');
}

function completaTarefa(item) {
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}



/* Movimento dos Botões com suas funções */
const botaoApagaTudo = document.querySelector('#apaga-tudo');
botaoApagaTudo.addEventListener('click', apagaTudo);
function apagaTudo() {
  const botaoApagaTudo = document.querySelectorAll('.tarefa')
  for (let index = 0; index < botaoApagaTudo.length; index += 1) {
    botaoApagaTudo[index].remove();
  }
  localStorage.clear();
}

const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
function apagaFinalizados() {
  const finalizados = document.querySelectorAll('.completed')
  for (let index = 0; index < finalizados.length; index += 1) {
    if (finalizados[index].classList.contains('completed')) {
      finalizados[index].remove();
    }
  }
}

const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
function salvarTarefas() {
  localStorage.clear();
  const listaTarefas = document.querySelector('#lista-tarefas');
  /* Não preciso de 'For' porque o ID lista-tarefas já tem todo o HTML*/
  localStorage.setItem('tarefas', listaTarefas.innerHTML);
}

const botaoMoverCima = document.querySelector('#mover-cima');
botaoMoverCima.addEventListener('click', moverCima);
function moverCima() {
  /* Primeiro, descobre qual o li selecionado */
  const liSelecionado = document.querySelector('.selected')
  const liAcima = liSelecionado.previousElementSibling
  /* Se não houver erro com a seleção acima do selecionado */
  if (liAcima) {
    /* Move o liSelecionado para cima com este método */
    liSelecionado.parentNode.insertBefore(liSelecionado, liAcima)
  } else {
    alert('Não é possível subir mais esta tarefa!')
  }
}