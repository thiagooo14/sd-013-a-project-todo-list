const lista = document.querySelector('#lista-tarefas');
const txt = document.querySelector('#texto-tarefa');
const botaoApagar = document.querySelector('#apaga-tudo');
const apagarSelecionados = document.querySelector('#remover-finalizados');
const botao = document.querySelector('#criar-tarefa');

function criar() {
  if (txt.value === '') {
    return null;
  }
  const criarLi = document.createElement('li');
  criarLi.innerHTML = txt.value;
  criarLi.classList.add('item');
  lista.appendChild(criarLi);
  txt.value = '';
}

botao.addEventListener('click', criar);

function selecionar(value) {
  const itemSelected = document.querySelector('.selected');
  if (value.target.className === 'item') {
    value.target.classList.add('selected');
    if (itemSelected !== null) {
      itemSelected.classList.remove('selected');
    }
  }
}

lista.addEventListener('click', selecionar);

function doubleClick(value) {
  value.target.classList.toggle('completed');
}

lista.addEventListener('dblclick', doubleClick);

function apagar() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    const elementos = list[i];
    lista.removeChild(elementos);
  }
}
botaoApagar.addEventListener('click', apagar);

function apagarSelects() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    const elemento = list[i];
    if (elemento.classList.contains('completed')) {
      lista.removeChild(elemento);
    }
  }
}

apagarSelecionados.addEventListener('click', apagarSelects);
