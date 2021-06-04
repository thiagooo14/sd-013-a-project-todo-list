let listTarefa = document.querySelector('#lista-tarefas');
let textoTarefa = document.querySelector('#texto-tarefa');
let buttonAdicionar = document.querySelector('#criar-tarefa');

function adicionar() {
  let lis = document.createElement('li');
  let texto = textoTarefa.value;

  if (texto.length > 0){
    listTarefa.appendChild(lis);
    lis.innerHTML = texto;
    textoTarefa.value = '';
    lis.classList.add('colorir');
  }
}

buttonAdicionar.addEventListener('click', adicionar);
