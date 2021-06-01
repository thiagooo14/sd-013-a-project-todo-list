// Elementos
const elementButtonCriarTarefa = document.getElementById('criar-tarefa');
const elementOl = document.getElementById('lista-tarefas');

// Eventos
elementButtonCriarTarefa.addEventListener('click', adicionaLista)


//Funções
function adicionaLista() {
  const elementTarefa = document.getElementById('texto-tarefa');
  let tarefa = elementTarefa.value;
  const elementLiAdd = document.createElement('li');
  elementLiAdd.innerHTML = tarefa;
  elementOl.appendChild(elementLiAdd);
  elementTarefa.value = '';
}
