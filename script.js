document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);

function criarTarefa () {
  const listaOrdenada = document.getElementById('lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa').value;
  const tarefaCriada = document.createElement('li');
  tarefaCriada.innerText = tarefa
  listaOrdenada.appendChild(tarefaCriada);
  document.getElementById("texto-tarefa").value = "";
}

document.getElementById('lista-tarefas').addEventListener('click', cinzaTexto);

function cinzaTexto (event) {
  const tarefa = event.target;
  const parent = document.getElementById('lista-tarefas').childNodes;
  for (i = 0; i < parent.length; i += 1) {
    parent[i].classList.remove('selecao');
  }
  if (tarefa.classList.contains('selecao')) {
    tarefa.classList.remove('selecao');
  } else {
    tarefa.classList.add('selecao');
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', tachaTexto);

function tachaTexto (event) {
  const tarefa = event.target;
  if (tarefa.classList.contains("completed")) {
    // tarefa.style.textDecoration = 'line-through';
    event.target.classList.remove('completed');
  } else {
    // tarefa.style.textDecoration = 'none';
    event.target.classList.add('completed');
  }
}

document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);

function apagaTudo () {
  //Modelo da funcao tirado deste site:
  //https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  const parent = document.getElementById('lista-tarefas');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}

document.getElementById('remover-finalizados').addEventListener('click', apagaFinalizados);

function apagaFinalizados () {
  //Modelo da funcao tirado deste site:
  //https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  let listaTachada = document.querySelectorAll('.completed');
  const parent = document.getElementById('lista-tarefas');
  for (let i = 0; i < listaTachada.length; i += 1) {
    let element = listaTachada[i];
    if (element.className.includes ('completed')) {
      parent.removeChild(element);
    };
  };
}

document.getElementById('remover-selecionado').addEventListener('click', apagaSelecao);

function apagaSelecao () {
  const parent = document.getElementById('lista-tarefas');
  const children = document.getElementById('lista-tarefas').childNodes;
  for (let i = 0; i < children.length; i += 1) {
    let element = children[i];
    if (element.className.includes('selecao')) {
      parent.removeChild(element);
    };
  }
}
