// inicia o reload trazendo as informações do localstorage e printando a ol
let olTask = document.getElementById('lista-tarefas');
let liTask = document.createElement('li');
let localStTask = localStorage.getItem('task');
olTask.innerHTML = localStTask;

// for (let index = 0; index < localStTask.length; index += 1) {
//   olTask.innerHTML = localStTask[index];
// }

// liTask.innerHTML = document.getElementById('texto-tarefa').value;
// liTask.setAttribute('class', 'linha');
// olTask.appendChild(liTask);
// document.getElementById('texto-tarefa').value = '';

function include() {
  let buttonCreate = document.getElementById('criar-tarefa');

  buttonCreate.addEventListener('click', () => {
    liTask.innerHTML = document.getElementById('texto-tarefa').value;
    liTask.setAttribute('class', 'linha');
    olTask.appendChild(liTask);
    document.getElementById('texto-tarefa').value = '';
  });
}
include();

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

// função para apagar todas as tarefas com clique no botão apagar tudo
function deleteAll() {
  let buttonDelAll = document.getElementById('apaga-tudo');

  buttonDelAll.addEventListener('click', searchLine);

  function searchLine() {
    let liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      liTask[i].remove();
    }
  }
}
deleteAll();

// Remove as tarefas marcadas como finalizadas
function deleteFinished() {
  let buttonDelFinished = document.getElementById('remover-finalizados');

  buttonDelFinished.addEventListener('click', searchFinished);

  function searchFinished() {
    let liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      if (liTask[i].classList.contains('completed')) {
        liTask[i].remove();
      }
    }
  }
}
deleteFinished();

// botão salva as tarefas no localstorage
function saveTasks() {
  let buttonSaveTasks = document.getElementById('salvar-tarefas'); //traz o botão

  buttonSaveTasks.addEventListener('click', function () {
    localStorage.setItem('task', olTask.innerHTML);
  }); // escuta o evento
}
saveTasks();
