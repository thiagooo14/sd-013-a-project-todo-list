const botaoCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const listaOrdenadaTarefas = document.getElementsByClassName('list');
const main = document.getElementById('main');
const listaOrdenadaListaTarefas = document.getElementById('lista-tarefas');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoCriarTarefa.addEventListener('click', () => {
  if (inputTextoTarefa.value === '') {
    window.alert(
      'Input em branco, digite alguma tarefa antes de clicar no botão "Adicionar".'
    );
  } else {
    let li = criaElemento('li', 'class', 'list');
    li.innerText = inputTextoTarefa.value;
    listaOrdenadaListaTarefas.appendChild(li);
    inputTextoTarefa.value = '';
    li.addEventListener('click', changeBackgroundColor);
    li.addEventListener('dblclick', changeCompleted);
  }
});

function criaElemento(elemento, classOrId, name = '') {
  let ele = document.createElement(elemento);
  ele.setAttribute(classOrId, name);
  return ele;
}

function changeBackgroundColor(e) {
  let listaOrdenadaTarefas = document.getElementsByClassName('list');

  for (let listaTarefa of listaOrdenadaTarefas) {
    listaTarefa.style.backgroundColor = '';
  }

  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function changeCompleted(e) {
  e.target.classList.toggle('completed');
}

botaoApagaTudo.addEventListener('click', () => {
  while (listaOrdenadaListaTarefas.lastElementChild) {
    listaOrdenadaListaTarefas.removeChild(
      listaOrdenadaListaTarefas.lastElementChild
    );
  }
});

botaoRemoverFinalizados.addEventListener('click', () => {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    const element = lis[i];
    if (element.classList.contains('completed')) {
      listaOrdenadaListaTarefas.removeChild(element);
    }
  }
});
