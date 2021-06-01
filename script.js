/* Elementos */
const elementButtonCriarTarefa = document.getElementById('criar-tarefa');
const elementOl = document.getElementById('lista-tarefas');
/* xxxxxxxlet elementLi = document.getElementsByClassName('tarefa'); */
const elementTarefa = document.getElementById('texto-tarefa');

const pegaListaTarefas = localStorage.getItem('tarefas');
const listaTarefas = document.querySelector('#lista-tarefas');
listaTarefas.innerHTML = pegaListaTarefas;

/* Funções */
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

function criaTarefa() {
  const item = document.createElement('li');
  item.className = 'tarefa';
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

/* Movimento dos Botões com suas funções */
const botaoApagaTudo = document.querySelector('#apaga-tudo');
function apagaTudo() {
  const botaoApagaTudo2 = document.querySelectorAll('.tarefa');
  for (let index = 0; index < botaoApagaTudo2.length; index += 1) {
    botaoApagaTudo2[index].remove();
  }
  localStorage.clear();
}

const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
function apagaFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    if (finalizados[index].classList.contains('completed')) {
      finalizados[index].remove();
    }
  }
}

const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
function salvarTarefas() {
  localStorage.clear();
  const listaTarefas2 = document.querySelector('#lista-tarefas');
  /* Não preciso de 'For' porque o ID lista-tarefas já tem todo o HTML */
  localStorage.setItem('tarefas', listaTarefas2.innerHTML);
}

const botaoMoverCima = document.querySelector('#mover-cima');
function moverCima() {
  /* Primeiro, descobre qual o li selecionado */
  const liSelecionado = document.querySelector('.selected');
  /* Se não houver erro com a seleção acima do selecionado */
  if (liSelecionado) {
    const liAcima = liSelecionado.previousElementSibling;
    if (liAcima) {
      /* Move o liSelecionado para cima com este método */
      liSelecionado.parentNode.insertBefore(liSelecionado, liAcima);
    } else {
      alert('Não é possível subir mais esta tarefa!');
    }
  }
}

const botaoMoverBaixo = document.querySelector('#mover-baixo');
function moverBaixo() {
  /* Descobrindo o Li selecionado */
  const liSelecionado = document.querySelector('.selected');
  if (liSelecionado) {
    const liAbaixo = liSelecionado.nextElementSibling;
    if (liAbaixo) {
      /* Move o liSelecionado para baixo, notado que agora a sequencia inverteu */
      liSelecionado.parentNode.insertBefore(liAbaixo, liSelecionado);
    } else {
      alert('Não é possível abaixar mais esta tarefa!');
    }
  }
}

const botaoRemoverSelecionado = document.querySelector('#remover-selecionado');
function removerSelecionado() {
  const liSelecionado = document.querySelector('.selected');
  liSelecionado.remove();
}

/* Eventos */
elementButtonCriarTarefa.addEventListener('click', criaTarefa);
botaoMoverBaixo.addEventListener('click', moverBaixo);
botaoApagaTudo.addEventListener('click', apagaTudo);
botaoRemoverSelecionado.addEventListener('click', removerSelecionado);
botaoMoverCima.addEventListener('click', moverCima);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
