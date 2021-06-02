const listaTasks = document.getElementById('lista-tarefas');
const btnAddTask = document.getElementById('criar-tarefa');
const itemTasks = document.getElementsByClassName('task-list');

// Função que add a tafera a lista
function addTasks() {
  const taskList = document.createElement('li');
  taskList.className = 'task-list';

  // Pega o calor do input e coloca na li.
  taskList.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = ''; // Reseta o input
  listaTasks.appendChild(taskList);
}

function addColorItem(event) {
  // Um for mais simples para remove os style do item da lista.
  for (const item of itemTasks) {
    // So remove o style
    if (event.target.className.startsWith('task-list')) {
      item.removeAttribute('style');
    }

    if (event.target.className.startsWith('task-list')) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

// Função que coloca sublinhado no item.
function underlinedItem(event) {
  if(event.target.className === 'task-list'){
    event.target.className += ' completed'
  }else if(event.target.className === 'task-list completed'){
    event.target.className = 'task-list';
    console.log(event.target)
  }
}
''.startsWith
btnAddTask.addEventListener('click', addTasks);
listaTasks.addEventListener('click', addColorItem);
listaTasks.addEventListener('dblclick', underlinedItem);
