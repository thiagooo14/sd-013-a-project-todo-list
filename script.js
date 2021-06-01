// Elementos
const elementButtonCriarTarefa = document.getElementById('criar-tarefa');
const elementOl = document.getElementById('lista-tarefas');
let elementLi = document.getElementsByClassName('tarefa');
const elementTarefa = document.getElementById('texto-tarefa');


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
  botaoApagaTudo.classList.remove('tarefa');
}

const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
botaoApagaFinalizados.addEventListener('click', removeFinalizados);
function removeFinalizados() {
  const botaoApagaFinalizados = document.querySelectorAll('.completed')
  for (let index = 0; index < botaoApagaFinalizados.length; index += 1) {
    botaoApagaFinalizados[index].remove();
  }
  botaoApagaFinalizados.classList.remove('completed');
}

const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
function salvarTarefas() {
  localStorage.clear();
  const botaoSalvarTarefas = document.querySelectorAll('.tarefa')
  for (let index = 0; index < botaoSalvarTarefas.length; index += 1) {
    console.log(botaoSalvarTarefas[index])
    localStorage.setItem('Tarefa', botaoSalvarTarefas[index].innerHTML);
  }
}
