const listTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const buttonAdicionar = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const getLi = document.getElementsByTagName('li');
const buttonSelected = document.querySelector('#remover-finalizados');
const salvar = document.querySelector('#salvar-tarefas');

//ADICIONA LISTAS
function adicionar() {
  buttonAdicionar.addEventListener('click', adicionar);
  const lis = document.createElement('li');
  const texto = textoTarefa.value;

  if (texto.length > 0) {
    listTarefa.appendChild(lis);
    lis.innerHTML = texto;
    textoTarefa.value = '';
  }
}

adicionar();

//ADICIONA A CLASSE SELECTED
function selectedClass() {
  listTarefa.addEventListener('click', (event) => {
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

selectedClass();

//REMOVE E ADICIONA CLASSE COMPLETED
function selectedClassB() {
  listTarefa.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

selectedClassB();

//APAGA TODA A LISTA
function deleteList() {
  buttonClear.addEventListener('click', deleteList);

  while (getLi.length > 0) {
    for (let n = 0; n < getLi.length; n += 1) {
      const t = getLi[n];
      listTarefa.removeChild(t);
    }
  }
}

deleteList();

//REMOVE TODOS OS QUE TEM A CLASSE COMPLETED
function removeClass() {
  const completed = document.querySelectorAll('.completed');
  buttonSelected.addEventListener('click', removeClass);

  for (let q = 0; q < completed.length; q += 1) {
    listTarefa.removeChild(completed[q]);
  }
}

removeClass();

/// REMOVE A LINHA SELECIONADA
function deletar() {
  const selectede = document.querySelector('.selected');
  const remover = document.querySelector('#remover-selecionado');
  remover.addEventListener('click', deletar);

  if (selectede) {
    listTarefa.removeChild(selectede);
  }
}

deletar();

//SALVAR 
if (localStorage.lista) {
  document.getElementById('lista-tarefas').innerHTML = localStorage.lista;
}

function salvarLista() {
  salvar.addEventListener('click', salvarLista);
  let listas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('lista', listas);
}

salvarLista();
