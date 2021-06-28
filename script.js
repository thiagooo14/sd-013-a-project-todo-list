const btnInput = document.getElementById('criar-tarefa'); // botão de add tarefa
const btnClear = document.getElementById('apaga-tudo'); // botão de apagar
const taskText = document.getElementById('texto-tarefa'); // input com o texto da tarefa
const btnClearCompleted = document.getElementById('remover-finalizados');

// const taskList = document.getElementById('lista-tarefas'); // ol
// const taskList = document.querySelector('ol');

btnInput.addEventListener('click', () => {
  const taskList = document.querySelector('ol');
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText.value;
  taskList.appendChild(taskItem);
  taskText.value = '';
});

function selectElement() {
  const taskList = document.querySelector('ol');
  const listItens = document.getElementsByTagName('li');
  taskList.addEventListener('click', (event) => {
    for (let index = 0; index < listItens.length; index += 1) {
      listItens[index].classList.remove('select');
    }
    event.target.classList.add('select');
  });
}

selectElement();

// Erro npm test 9.2 > remover a classe 'completed'
function completedList() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

completedList();

function clearAll() {
  btnClear.addEventListener('click', () => {
    const taskList = document.querySelector('ol');
    taskList.innerHTML = '';
  });
}

clearAll();

btnClearCompleted.addEventListener('click', () => {
  const taskCompletd = document.querySelectorAll('.completed');
  for (let index = 0; index < taskCompletd.length; index += 1) {
    taskCompletd[index].remove();
  }
});

/* save.addEventListener('click', () => {
  const list = document.getElementById('listaTarefas');
  localStorage.setItem('listaTarefas',list);
});

function carregaLista() {
  // console.log(localStorage.getItem('listaTarefas'));
  const taskItem = document.getElementById('lista-tarefas');
  taskItem.innerHTML = localStorage.getItem('listaTarefas');
} */

// window.onload = carregaLista();

const ol = document.getElementById('lista-tarefas');

const saveTasks = () => {
  const saveBtn = document.getElementById('salvar-tarefas');
  const myStorage = localStorage;
  saveBtn.addEventListener('click',() => myStorage.setItem('taskList', ol.innerHTML))
  ol.innerHTML = myStorage.getItem('taskList');
};

saveTasks();
