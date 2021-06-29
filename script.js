// window.onload = retomaLista;
// function retomaLista() {
//   if (localStorage !== undefined) {
//     const listaStorage = localStorage;
//     for (let i = 0; i < listaStorage.length; i += 1) {
//       const tarefaCriada = document.createElement('li');
//       const tarefa = localStorage.key(i);
//       tarefaCriada.innerText = tarefa;
//       document.getElementById('lista-tarefas').appendChild(tarefaCriada);
//       if (listaStorage.getItem('i') === 'true') {
//         document.getElementsByName('li')[i].classList.add('selecao');
//       }
//     }
//   }
// }

const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  const listaOrdenada = listaTarefas;
  const tarefa = document.getElementById('texto-tarefa').value;
  const tarefaCriada = document.createElement('li');
  tarefaCriada.innerText = tarefa;
  listaOrdenada.appendChild(tarefaCriada);
  document.getElementById('texto-tarefa').value = '';
  // localStorage.setItem(tarefa, 'false');
}

function cinzaTexto(event) {
  const tarefa = event.target;
  const parent = listaTarefas.childNodes;
  for (let i = 0; i < parent.length; i += 1) {
    parent[i].classList.remove('selecao');
  }
  if (tarefa.classList.contains('selecao')) {
    tarefa.classList.remove('selecao');
  } else {
    tarefa.classList.add('selecao');
  }
}

function tachaTexto(event) {
  const tarefa = event.target;
  if (tarefa.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function apagaTudo() {
  // Modelo da funcao tirado deste site:
  // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  const parent = listaTarefas;
  localStorage.clear();
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function apagaFinalizados() {
  //  Modelo da funcao tirado deste site:
  //  https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  const listaTachada = document.querySelectorAll('.completed');
  const parent = listaTarefas;
  for (let i = 0; i < listaTachada.length; i += 1) {
    const element = listaTachada[i];
    if (element.className.includes('completed')) {
      parent.removeChild(element);
    }
  }
}

function apagaSelecao() {
  const parent = listaTarefas;
  const children = listaTarefas.childNodes;
  for (let i = 0; i < children.length; i += 1) {
    const element = children[i];
    if (element.className.includes('selecao')) {
      parent.removeChild(element);
    }
  }
}

function salvaLista() {
  const lista = listaTarefas.innerHTML;
  localStorage.setItem('listaSalva', lista);
}

function retomaLista() {
  const lista = localStorage.getItem('listaSalva');
  listaTarefas.innerHTML = lista;
}

document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);

listaTarefas.addEventListener('click', cinzaTexto);

listaTarefas.addEventListener('dblclick', tachaTexto);

document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);

document.getElementById('remover-finalizados').addEventListener('click', apagaFinalizados);

document.getElementById('remover-selecionado').addEventListener('click', apagaSelecao);

document.getElementById('salvar-tarefas').addEventListener('click', salvaLista);

retomaLista();
