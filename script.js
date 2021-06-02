const orderList = document.querySelector('#lista-tarefas');

// Muda cor de fundo do item da lista selecionado
function changeBgItemList() {
  const lengthTaskList = orderList.children;
  for (let index = 0; index < lengthTaskList.length; index += 1) {
    lengthTaskList[index].addEventListener('click', () => {
      lengthTaskList[index].style.backgroundColor = 'rgb(128,128,128)';
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
