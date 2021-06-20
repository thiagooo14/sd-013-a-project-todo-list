// inicia o reload trazendo as informações do localstorage e printando a ol
const olTask = document.getElementById('lista-tarefas');
const localStTask = localStorage.getItem('task');
olTask.innerHTML = localStTask;

// insere a data e hora atual de acordo com o s.o.
function dateAtual() {
  const timeDate = document.getElementById('time');
  const dateAtual = new Date();
  const dateDia = String(dateAtual.getDate()).padStart(2, '0');
  const dateMes = String(dateAtual.getMonth() + 1).padStart(2, '0');
  const dateAno = dateAtual.getFullYear();
  const dateHora = dateAtual.getHours();
  const dateMinuto = String(dateAtual.getMinutes()).padStart(2, '0');
  timeDate.innerText =
    dateDia +
    '/' +
    dateMes +
    '/' +
    dateAno +
    '  -  ' +
    dateHora +
    ':' +
    dateMinuto;
}
dateAtual();

// função que inclui novas tarefas a partir do clique no botão incluír tarefa
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

// evento para criar  tarefa a partir da tecla enter
const inputNewTask = document.getElementById('texto-tarefa');
inputNewTask.addEventListener('keyup', (event) => {
  const tecla = event.keyCode;
  if (tecla === 13) {
    event.preventDefault();
    document.getElementById('criar-tarefa').click();
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
    ol.classList.remove('selected');
  }
  ol.addEventListener('click', changeIntoElements);
  ol.classList.remove('selected');
}
changeSelected();

// função para marcar a tarefa como concluída após o clique duplo
  function searchCompleted(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      if (event.target.classList.contains('linha')) {
        event.target.classList.add('completed');
      }
    }
  }
  ol.addEventListener('dblclick', searchCompleted);


// // função para marcar a tarefa como concluída após o clique no botão "marcar"
function finishTaskButtonOk() {
  const taskSelected = document.querySelector('.selected');

  // for (let index = 0; index < arrayLi.length; index += 1) {
  if (taskSelected.classList.contains('completed')) {
    taskSelected.classList.remove('completed');
  } else {
    taskSelected.classList.add('completed');
  }
}


// função para apagar todas as tarefas com clique no botão apagar tudo
function deleteAll() {
  localStorage.clear();
  document.location.reload();
}

// Remove as tarefas marcadas como finalizadas
function deleteFinished() {
    const liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      if (liTask[i].classList.contains('completed')) {
        liTask[i].remove();
      }
    }
}

// botão salva as tarefas no localstorage
function saveTasks() {
  localStorage.setItem('task', olTask.innerHTML);
  alert('Tarefas salvas com sucesso!');
}

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
      liTask[index].className === 'linha selected' &&
      index < liTask.length &&
      liTask.length >= 2 &&
      liTask.length - index >= 2
    ) {
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
