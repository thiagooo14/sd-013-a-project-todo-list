const buttonTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('ol');
const li = document.getElementsByTagName('li');
const buttonDelete = document.querySelector('#apaga-tudo');

buttonTask.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const textValue = input.value;
  const createList = document.createElement('li');
  createList.innerText = textValue;
  createList.className = 'task';
  const olList = document.querySelector('#lista-tarefas');
  olList.appendChild(createList);
  input.value = '';
});

function deleteTask() {
  olList.addEventListener('click', (event) => {
    for (let index = 0; index < li.length; index += 1) {
      li[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
deleteTask();

function risk() {
  olList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
risk();

function cleanTasks() {
  buttonDelete.addEventListener('click', () => {
    olList.innerHTML = '';
  });
}
cleanTasks();