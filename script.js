const orderList = document.querySelector('#lista-tarefas');

// Muda cor de fundo do item da lista selecionado
function onlySelected(indexValue) {
  const taskList = orderList.children;
  const lengthTaskList = taskList.length;
  let indexSelected = indexValue;
  let cont = 0;
  while (cont < indexSelected) {
    taskList[cont].style.backgroundColor = 'white';
    cont += 1;
  }
  while (indexSelected + 1 < lengthTaskList) {
    indexSelected += 1;
    taskList[indexSelected].style.backgroundColor = 'white';
  }
}

function changeBgItemList() {
  const lengthTaskList = orderList.children;
  for (let index = 0; index < lengthTaskList.length; index += 1) {
    lengthTaskList[index].addEventListener('click', () => {
      lengthTaskList[index].style.backgroundColor = 'rgb(128,128,128)';
      if (lengthTaskList[index].getAttribute('style') === 'background-color: rgb(128, 128, 128);') {
        onlySelected(index);
      }
    });
  }
}

// Cria uma nova tarefa
function newTask() {
  const btnAdd = document.querySelector('#criar-tarefa');
  const inputValue = document.querySelector('#texto-tarefa');
  btnAdd.addEventListener('click', () => {
    const createTask = document.createElement('li');
    createTask.innerText = inputValue.value;
    orderList.appendChild(createTask);
    inputValue.value = '';
    changeBgItemList();
  });
}
newTask();

// Riscar tarefa ao clicar duas vezes
function taskEnd() {
  const lengthTaskList = orderList.children;
  for (let index = 0; index < lengthTaskList.length; index += 1) {
    lengthTaskList[index].addEventListener('dblclick', () => {
      if (lengthTaskList[index].classList[0] === 'completed') {
        lengthTaskList[index].className = '';
      } else {
        lengthTaskList[index].className = 'completed';
      }
    });
  }
}
document.onclick = taskEnd;

// Limpa Tarefa
function clearTask() {
  const lengthTaskList = orderList;
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', () => {
    while (lengthTaskList.firstChild) {
      lengthTaskList.removeChild(lengthTaskList.firstChild);
    }
  });
}
clearTask();
