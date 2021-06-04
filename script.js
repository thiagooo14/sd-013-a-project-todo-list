let listTarefa = document.querySelector('#lista-tarefas');
let textoTarefa = document.querySelector('#texto-tarefa');
let buttonAdicionar = document.querySelector('#criar-tarefa');
const getLi = document.getElementsByTagName('li');

function adicionar() {
  let lis = document.createElement('li');
  let texto = textoTarefa.value;

  if (texto.length > 0){
    listTarefa.appendChild(lis);
    lis.innerHTML = texto;
    textoTarefa.value = '';
  }
}

buttonAdicionar.addEventListener('click', adicionar);

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
