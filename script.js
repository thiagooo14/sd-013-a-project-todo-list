const orderList = document.querySelector('#lista-tarefas');

// Cria uma nova tarefa
function newTask() {
  const btnAdd = document.querySelector('#criar-tarefa');
  const inputValue = document.querySelector('#texto-tarefa');
  btnAdd.addEventListener('click', () => {
    const createTask = document.createElement('li');
    createTask.innerText = inputValue.value;
    orderList.appendChild(createTask);
    inputValue.value = '';
  });
}
newTask();
