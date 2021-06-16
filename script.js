function addTask() {
  const valueInput = document.querySelector('#texto-tarefa');
  const valueLi = document.createElement('li');
  valueLi.innerHTML = valueInput.value;
  valueLi.classList.add('tarefas');
  document.getElementById('lista-tarefas').appendChild(valueLi);
  valueInput.value = null;
}
const tarefa = document.getElementById('criar-tarefa');
tarefa.addEventListener('click', addTask);

const olGrey = document.querySelector('#lista-tarefas');
const liGrey = document.getElementsByTagName('li');
olGrey.addEventListener('click', (event) => {
  if (event.target.classList.contains('tarefas')) {
    if (event.target.classList.contains('grey')) {
      event.target.classList.remove('grey');
    } else {
      for (let i of liGrey) {
        i.classList.remove('grey');
      }
      event.target.classList.add('grey');
    }
  }
});

olGrey.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('tarefas')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

function removeTask() {
  const ol = document.querySelector('#lista-tarefas');
  while (ol.hasChildNodes()) {
    ol.removeChild(ol.firstChild);
  }
}

function finishRemove() {
  const finish = document.querySelector('.completed');
  const ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < finish.length; index += 1) {
    if (finish[index].classList.contains('completed')) {
      ol.removeChild(finish[index]);
    }
  }
}
const buttonFinish = document.getElementById('remover-finalizados');
buttonFinish.addEventListener('click', finishRemove);
