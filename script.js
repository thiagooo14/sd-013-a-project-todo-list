// inicia o reload trazendo as informações do localstorage e printando a ol
const olTask = document.getElementById('lista-tarefas');
const localStTask = localStorage.getItem('task');
olTask.innerHTML = localStTask;

function include() {
  const buttonCreate = document.getElementById('criar-tarefa');

  buttonCreate.addEventListener('click', () => {
    const liTask = document.createElement('li');
    liTask.innerHTML = document.getElementById('texto-tarefa').value;
    liTask.setAttribute('class', 'linha');
    olTask.appendChild(liTask);
    document.getElementById('texto-tarefa').value = '';
  });
}
include();


//evento para criar  tarefa a partir da tecla enter
 var inputNewTask = document.getElementById("texto-tarefa");
inputNewTask.addEventListener("keyup", function(event) {
var tecla = event.keyCode
  if (tecla === 13) {
   event.preventDefault();
   document.getElementById("criar-tarefa").click();
  }
});

// Troca a cor de background de uma 'li' quando clicada
const arrayLi = document.getElementsByClassName('linha');
const ol = document.getElementById('lista-tarefas');

function changeSelected() {
  function changeIntoElements(event) {
    ol.classList.remove('selected');
    for (let index = 0; index < arrayLi.length; index += 1) {
      if (arrayLi[index].classList.contains('selected')) {
        arrayLi[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }
  ol.addEventListener('click', changeIntoElements);
}
changeSelected();

// função para marcar a tarefa como concluída após o clique duplo
function finishTask() {
  function searchCompleted(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
  ol.addEventListener('dblclick', searchCompleted);
}
finishTask();

// // // função para marcar a tarefa como concluída após o clique no botão "marcar tarefa como concluída"
// function finishTaskButtonOk() {
//   const finishTaskButtonOk = document.getElementById('marcar-finalizado');

//   finishTaskButtonOk.addEventListener('click', () => {

//     for (let index = 0; index < arrayLi.length; index += 1) {
//       if (arrayLi[index].classList.contains('completed')) {
//         arrayLi[index].classList.remove('completed');
//       }else {arrayLi[index].classList.add('completed');}
//     }
//   });
// finishTaskButtonOk();

// função para apagar todas as tarefas com clique no botão apagar tudo
function deleteAll() {
  const buttonDelAll = document.getElementById('apaga-tudo');

  function searchLine() {
    localStorage.clear();
    const liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      liTask[i].remove();
    }
  }
  buttonDelAll.addEventListener('click', searchLine);
}
deleteAll();

// Remove as tarefas marcadas como finalizadas
function deleteFinished() {
  const buttonDelFinished = document.getElementById('remover-finalizados');

  function searchFinished() {
    const liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      if (liTask[i].classList.contains('completed')) {
        liTask[i].remove();
      }
    }
  }
  buttonDelFinished.addEventListener('click', searchFinished);
}
deleteFinished();

// botão salva as tarefas no localstorage
function saveTasks() {
  const buttonSaveTasks = document.getElementById('salvar-tarefas'); // traz o botão

  buttonSaveTasks.addEventListener('click', () => {
    localStorage.setItem('task', olTask.innerHTML);
  }); // escuta o evento
}
saveTasks();

function moveUp() {
  const liTask = document.querySelectorAll('.linha'); // array com as linhas

  for (let index = 0; index < liTask.length; index += 1) {
    if (liTask[index].className === 'linha selected' && index > 0) {
      olTask.insertBefore(liTask[index], liTask[index - 1]);
    }
  }
}
moveUp();

function moveDown() {
  const liTask = document.querySelectorAll('.linha'); // array com as linhas

  for (let index = 0; index < liTask.length; index += 1) {
    if (
      (liTask[index].className === 'linha selected')
      && (index < liTask.length)
      && (liTask.length >= 2)
      && (liTask.length - index >= 2)) {
      olTask.insertBefore(liTask[index + 1], liTask[index]);
    }
  }
}
moveDown();

// Remove as tarefas selecionadas
function deleteSelected() {
  const buttonDelSelected = document.getElementById('remover-selecionado');

  function searchSelected() {
    const liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      if (liTask[i].classList.contains('selected')) {
        liTask[i].remove();
      }
    }
  }
  buttonDelSelected.addEventListener('click', searchSelected);
}
deleteSelected();
