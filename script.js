const listTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const buttonAdicionar = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
let getLi = document.getElementsByTagName('li');
let buttonSelected = document.querySelector('#remover-finalizados');

function adicionar() {
  buttonAdicionar.addEventListener('click', adicionar);
  let lis = document.createElement('li');
  let texto = textoTarefa.value;

  if (texto.length > 0){
    listTarefa.appendChild(lis);
    lis.innerHTML = texto;
    textoTarefa.value = '';
  }
}

adicionar();

// Desafio 7 foi com a ajuda de Thiago Carboneri

function selectedClass() {
  listTarefa.addEventListener('click', (event) => {
    
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

selectedClass();

function selectedClass_2() {
  listTarefa.addEventListener('dblclick', (event) => {
    
    event.target.classList.toggle('completed');
  });
}

selectedClass_2();


function deleteList() {
  buttonClear.addEventListener('click', deleteList);

  while (getLi.length > 0) {

    for (let n = 0; n < getLi.length; n += 1) {
      let t = getLi[n];
      listTarefa.removeChild(t);
    }
  }
}

deleteList();

function removeClass() {
  const completed = document.querySelectorAll('.completed');
  buttonSelected.addEventListener('click', removeClass);

  for (let q = 0; q < completed.length; q += 1) {
    listTarefa.removeChild(completed[q]);
  }
}

removeClass ();
