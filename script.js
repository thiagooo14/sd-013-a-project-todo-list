const btnInput = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const taskList = document.getElementsByTagName('ol')[0];

btnInput.onclick = () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText.value;
  taskList.appendChild(taskItem);
  taskText.value = '';
};

/* const taskLi = document.querySelectorAll('li'); */
console.log(localStorage);
