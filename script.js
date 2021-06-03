window.onload = function todoList() {

  function todoAdd(){
    let addBtn = document.getElementById('criar-tarefa');
    addBtn.addEventListener('click', addTask);

    function addTask() {
      let input = document.getElementById('texto-tarefa');
      let value = input.value;
      if (!value) {
        alert('Por favor, digite alguma tarefa.');
      }
      else {
        let newTask = document.createElement('li');
        newTask.innerText = value;
  
        let todoList = document.getElementById('lista-tarefas');
        todoList.appendChild(newTask);
  
        let height = document.getElementById('lista-container').style.height;
        height = (parseInt(height) + 10) + 'px';

        todoDone();
        todoSelect();
      }
      document.getElementById('texto-tarefa').value = '';
    }
  }
  todoAdd();

  function todoClear() {
    let clearBtn = document.getElementById('apaga-tudo');
    clearBtn.addEventListener('click', clear);
    function clear() {
      let todoList = document.getElementById('lista-tarefas');
      todoList.innerHTML = '';
    }
  }
  todoClear();

  function clearDone() {
    let clearBtn = document.getElementById('remover-finalizados');
    clearBtn.addEventListener('click', clear);
    function clear() {
      let todoList = document.getElementById('lista-tarefas');
      let completed = document.querySelectorAll('.completed');
      for(let i = 0; i < completed.length; i += 1) {
        todoList.removeChild(completed[i]);
      }
    }
  }
  clearDone();

  function todoSelect() {
    let tasks = document.getElementsByTagName('li');
    for(let i = 0; i < tasks.length; i += 1) {
      tasks[i].addEventListener('click', select);
    }
    function select(evt) {
      let tasks = document.getElementsByTagName('li');
      for(let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].classList.contains('selected')) {
          tasks[i].classList.remove('selected');
        }
      }
      evt.target.classList.add('selected');
    }
  }

  function todoDone() {
    let tasks = document.getElementsByTagName('li');
    for(let i = 0; i < tasks.length; i += 1) {
      tasks[i].addEventListener('dblclick', decoration);
    }
  }

  function decoration(evt) {
    evt.target.classList.toggle('completed');
  }
}