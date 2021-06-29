window.onload = retomaLista();
    function retomaLista(){
      if (localStorage !== undefined) {
        const listaStorage = localStorage;
        for (let i = 0; i < listaStorage.length; i += 1) {
          const tarefaCriada = document.createElement('li');
          let tarefa = localStorage.key(i);
          tarefaCriada.innerText = tarefa;
          document.getElementById('lista-tarefas').appendChild(tarefaCriada);
          if (listaStorage.getItem('i') === 'true'){
            document.getElementsByName('li')[i].classList.add('selecao');
          }
        }
      }
    }



document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);

function criarTarefa () {
  const listaOrdenada = document.getElementById('lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa').value;
  const tarefaCriada = document.createElement('li');
  tarefaCriada.innerText = tarefa;
  listaOrdenada.appendChild(tarefaCriada);
  document.getElementById('texto-tarefa').value = '';
  localStorage.setItem(tarefa,'false');
}

document.getElementById('lista-tarefas').addEventListener('click', cinzaTexto);

function cinzaTexto(event) {
  const tarefa = event.target;
  const parent = document.getElementById('lista-tarefas').childNodes;
  for (let i = 0; i < parent.length; i += 1) {
    parent[i].classList.remove('selecao');
  }
  if (tarefa.classList.contains('selecao')) {
    tarefa.classList.remove('selecao');
  } else {
    tarefa.classList.add('selecao');
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', tachaTexto);

function tachaTexto(event) {
  const tarefa = event.target;
  if (tarefa.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);

function apagaTudo() {
  //Modelo da funcao tirado deste site:
  //https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  const parent = document.getElementById('lista-tarefas');
  localStorage.clear();
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', apagaFinalizados);

function apagaFinalizados() {
  //  Modelo da funcao tirado deste site:
  //  https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  const listaTachada = document.querySelectorAll('.completed');
  const parent = document.getElementById('lista-tarefas');
  for (let i = 0; i < listaTachada.length; i += 1) {
    const element = listaTachada[i];
    if (element.className.includes('completed')) {
      parent.removeChild(element);
    }
  }
}

document.getElementById('remover-selecionado').addEventListener('click', apagaSelecao);

function apagaSelecao() {
  const parent = document.getElementById('lista-tarefas');
  const children = document.getElementById('lista-tarefas').childNodes;
  for (let i = 0; i < children.length; i += 1) {
    const element = children[i];
    if (element.className.includes('selecao')) {
      parent.removeChild(element);
    }
  }
}
