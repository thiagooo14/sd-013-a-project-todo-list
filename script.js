const listaTasks = document.getElementById('lista-tarefas');
const btnAddTask = document.getElementById('criar-tarefa');

// Função que add a tafera a lista
function addTasks() {
  const taskList = document.createElement('li');
  taskList.className = "task-list"

  // Pega o calor do input e coloca na li.
  taskList.innerText = document.getElementById('texto-tarefa').value;  
  document.getElementById('texto-tarefa').value = ''; // Reseta o input
  listaTasks.appendChild(taskList);
}


function changeColorList(event){
  if(event.target.className === 'task-list'){
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

btnAddTask.addEventListener('click', addTasks);
listaTasks.addEventListener('click', changeColorList)
