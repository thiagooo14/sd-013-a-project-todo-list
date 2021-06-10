function addNewTask() {
  const getInputField = document.querySelector('#texto-tarefa');
  const addInputButton = document.querySelector('#criar-tarefa');
  const getTaskList = document.querySelector('#lista-tarefas');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      newLi.setAttribute('class', 'li');
      newLi.onclick = addColor;
      newLi.ondblclick = taskCompleted;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
        alert('Error: Digite ao menos 1 caractere.');
    }
  });
}

function addColor(event) {
  const getList = document.getElementsByClassName('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].classList.remove("selected");   
  }
  event.target.classList.add('selected');
}

function taskCompleted(event) { 
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  }
  else {
  event.target.classList.add('completed');
  }
}

function apagaTudo() {
  const lista = document.getElementById('lista-tarefas');
  const buttom = document.getElementById('apaga-tudo');
  
  buttom.addEventListener('click', function() {
   /*  https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild */
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild)
    }
  })
}

function apagaFinalizados() {
  const buttom = document.getElementById('remover-finalizados');
  const finish = document.getElementsByClassName('completed');
  
  buttom.addEventListener('click', function() {
    while (finish.length > 0) finish[0].remove();
  })
}

function apagarSelecionado() {
  const buttom = document.getElementById('remover-selecionado');
  const selected = document.getElementsByClassName('selected');
  
  buttom.addEventListener('click', function() {
    if (selected.length > 0){
    selected[0].remove();   
    }
  })
}

window.onload = function() {
  addNewTask();
  apagaTudo();
  apagaFinalizados();
  apagarSelecionado();
}
