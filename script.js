// Elementos
const elementButtonCriarTarefa = document.getElementById('criar-tarefa');
const elementOl = document.getElementById('lista-tarefas');
let elementLi = document.getElementsByClassName('tarefa');


// Eventos
elementButtonCriarTarefa.addEventListener('click', adicionaLista)

//Funções
function adicionaLista() {
  const elementTarefa = document.getElementById('texto-tarefa');
  let tarefa = elementTarefa.value;
  const elementLiAdd = document.createElement('li');
  elementLiAdd.className = 'tarefa'
  elementLiAdd.innerHTML = tarefa;
  //* elementLiAdd.addEventListener('click', function () {*/
  /*  elementLiAdd.style.backgroundColor = 'rgb(128,128,128)'}) */
  elementLiAdd.addEventListener('click', alteraBackground);
  elementOl.appendChild(elementLiAdd);
  elementTarefa.value = '';
}

function alteraBackground() {
  const elementLiTarefas = document.getElementsByClassName('tarefa');
  for (let index = 0; index < elementLiTarefas.length; index += 1) {
    elementLiTarefas[index].addEventListener('click', function () {
      elementLiTarefas[index].className = 'tarefa selected';
    })
    const elementLiTarefasSelected = document.getElementsByClassName('tarefa selected');
    for (let index2 = 0; index2 < elementLiTarefasSelected.length; index2 += 1) {
      if (elementLiTarefas[index].className !== elementLiTarefasSelected[index2].className) {
        elementLiTarefasSelected[index2].className = 'tarefa';
      }
    }
  }
}
