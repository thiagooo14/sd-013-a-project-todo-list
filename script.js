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

function completaTarefa(item){
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

function apagaTudo(){
  const botaoApagaTudo = document.querySelectorAll('.tarefa')
  for (let index = 0; index < botaoApagaTudo.length; index += 1) {
    botaoApagaTudo[index].remove()
  }
  botaoApagaTudo.classList.remove('tarefa')
}


botaoApagaTudo.addEventListener('click', apagaTudo);