// atributos.
const lista = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const botaoCria = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const marcacao = document.getElementsByClassName('completed');
const removeComp = document.getElementById('remover-finalizados');
const itens = document.getElementsByTagName('li');

// adiciona itens
function criarTarefa() {
  botaoCria.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = inputTarefa.value;
    lista.appendChild(li);
    inputTarefa.value = '';
    li.addEventListener('click', () => {
      li.classList.add('completed');
    });
    li.addEventListener('dblclick', () => {
      li.classList.remove('completed');
    });
    select();
  });
}

// testes
function clearAll() {
  apagaTudo.addEventListener('click', () => {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
  });
}

function clearCompleted() {
  removeComp.addEventListener('click', () => {
    for (let i = 0; i < marcacao.length; i += 1) {
      while (i < marcacao.length) {
        marcacao[i].remove();
      }
    }
  });
}

// selecionar

function deSelect() {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].classList.remove('selected');
  }
}

function select() {
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('click', (event) => {
      deSelect();
      const a = event;
      a.target.classList.add('selected');
    });
  }
}

criarTarefa();
clearAll();
clearCompleted();
