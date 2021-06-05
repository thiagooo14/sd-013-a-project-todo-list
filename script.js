function include() {
  let buttonCreate = document.getElementById('criar-tarefa');

  buttonCreate.addEventListener('click', () => {
    let olTask = document.getElementById('lista-tarefas');
    let liTask = document.createElement('li');
    olTask.appendChild(liTask);
    liTask.innerHTML = document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';

    liTask.setAttribute('class', 'linha');

    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i += 1) {
      li[i].style.margin = '5px';
      li[i].style.padding = '5px';
      li[i].style.fontSize = '18px';
      li[i].style.width = '200px';
    }
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

function deleteFinished() {
  let buttonDelFinished = document.getElementById('remover-finalizados');

  buttonDelFinished.addEventListener('click', searchFinished);

  function searchFinished() {
    let liTask = document.querySelectorAll('.linha');

    for (let i = 0; i < liTask.length; i += 1) {
      if(liTask[i].classList.contains('completed')){
      liTask[i].remove();
      }
    }
  }
}
deleteFinished();
