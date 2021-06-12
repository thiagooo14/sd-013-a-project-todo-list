let buttonList = document.getElementById('criar-tarefa');
let inputList = document.getElementById('texto-tarefa');
let paiLista = document.getElementById('lista-tarefas');

function createList() {
  let listaSon = document.createElement('li');
  listaSon.innerHTML = inputList.value;
  listaSon.classList = 'ilCriada'
  paiLista.appendChild(listaSon)
  inputList.value = '';
} 
  buttonList.addEventListener('click', createList);