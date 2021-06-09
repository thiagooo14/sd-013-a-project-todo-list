// Função para criar novas tarefas

function addNewTask() {
  let getInputField = document.querySelector('#texto-tarefa');
  let getInputButton = document.querySelector('#criar-tarefa');
  let getTaskList = document.querySelector('#lista-tarefas');

  getInputButton.addEventListener('click', () => {
    let newTask = document.createElement('li');
    newTask.className = 'itemTask';
    newTask.innerText = getInputField.value;
    getTaskList.appendChild(newTask);
    getInputField.value = '';
  })
}

addNewTask();

// Função background cinza

let getOl = document.querySelector('#lista-tarefas');

getOl.addEventListener('click', (evento) => {
  let removeGray = document.querySelectorAll('.gray');
  for (let i = 0; i < removeGray.length; i += 1) {
    removeGray[i].classList.remove('gray');
  }
  evento.target.classList.add('gray');
});

// Função efeito riscado

getOl.addEventListener('dblclick', (evento) => {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }  
})

let buttonDelete = document.getElementById('apaga-tudo');

function deleteTask () {
  getOl.innerHTML = '';
}

buttonDelete.addEventListener('click', deleteTask);
