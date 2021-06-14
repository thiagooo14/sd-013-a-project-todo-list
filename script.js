//elementos
const inputi = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

//buttons
const button = document.getElementById('criar-tarefa');
const buttonDelet = document.getElementById('apaga-tudo');
const buttonRemoved = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas');

//Função que adiciona tarefas
function adicionaTarefa() {
  const CreateText = document.createElement('li');
  listaDeTarefas.appendChild(CreateText);
  CreateText.innerText = inputi.value;
  inputi.value = '';
  CreateText.className = 'item-list';
}
button.addEventListener('click', adicionaTarefa);
inputi.addEventListener('keypress', (g) => {
  if (g.key === 'Enter') {
    adicionaTarefa();
  }
});

// Referência Josué Lobo//
listaDeTarefas.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.className === 'item-list') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
    }
    alvo.classList.add('selected');
    alvo.style.backgroundColor = 'rgb(128,128,128)';
  }
});

//Função que rasura a linha
function riscaLinha(evento) {
  const alvo = evento.target;
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}
listaDeTarefas.addEventListener('dblclick', riscaLinha);

//Função que apaga lista
function clearList() {
  listaDeTarefas.innerHTML='';
}
buttonDelet.addEventListener('click', clearList);

//Função removeConcluídos
function removeDone() {
  const concluido = document.querySelectorAll('.completed');
  for (let i = 0; i < concluido.length; i += 1) {
    listaDeTarefas.removeChild(concluido[i]);
  }
}
buttonRemoved.addEventListener('click', removeDone)

//Funções salva-tarefa
function setLocalSave() {
  const gravarPag = listaDeTarefas.innerHTML;
  localStorage.setItem('save', gravarPag);
}
buttonSave.addEventListener('click', setLocalSave);

function getLocalSave() {
  const salvaElementos = localStorage.getItem('save');
  if (salvaElementos !== null);
  listaDeTarefas.innerHTML= salvaElementos;
}
getLocalSave()