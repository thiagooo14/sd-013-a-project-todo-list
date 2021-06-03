const listaTasks = document.getElementById('lista-tarefas');
const btnAddTask = document.getElementById('criar-tarefa');
const itemTasks = document.getElementsByClassName('task-list');
const bntClearItem = document.getElementById('apaga-tudo');
const bntClearSelectItem = document.getElementById('remover-finalizados');
const bntSalveStorege = document.getElementById('salvar-tarefas');

// Função que add a tafera a lista
function addTasks() {
  const taskList = document.createElement('li');
  taskList.className = 'task-list';

  // Pega o color do input e coloca na li.
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
  if (event.target.className === 'task-list') {
    event.target.className += ' completed';
  } else if (event.target.className === 'task-list completed') {
    event.target.className = 'task-list';
  }
}

// Fonte https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
//  Deleta todos os Item da Lista
function clearTasksList() {
  while (listaTasks.firstChild) {
    listaTasks.removeChild(listaTasks.firstChild);
  }
}

// Deleta so os selecionado
function clearSelectItem() {
  const selectItem = document.querySelectorAll('.task-list.completed');
  for (const item of selectItem) {
    listaTasks.removeChild(item);
  }
}

// Salva a lista de Tarefas
https://stackoverflow.com/questions/34336960/what-is-the-es6-equivalent-of-python-enumerate-for-a-sequence
function setListStorage() {
  localStorage.clear()
  const objListItemTasks = []
  // Criar um Objeto com todos os dados importe pra salva.
  for (let item of itemTasks) {
    objListItemTasks.push({
      'text': item.innerText,
      'class': item.className,
      'style': item.getAttribute('style')
    })
  }

  localStorage.setItem('tasks', JSON.stringify(objListItemTasks))
  console.log(localStorage)
}

// Carregar os dados Salvos
function getSalveItem() {
  const objItemSalvo = JSON.parse(localStorage.tasks);
  if (objItemSalvo) {
    for (let item of objItemSalvo) {
      let li = document.createElement('li');
      if (item.style) { li.style = item.style };
      li.innerHTML = item.text;
      li.className = item.class;
      listaTasks.appendChild(li)
    }
  }
}

btnAddTask.addEventListener('click', addTasks);
listaTasks.addEventListener('click', addColorItem);
listaTasks.addEventListener('dblclick', underlinedItem);
bntClearItem.addEventListener('click', clearTasksList);
bntClearSelectItem.addEventListener('click', clearSelectItem);
bntSalveStorege.addEventListener('click', setListStorage)
