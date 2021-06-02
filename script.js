window.onload = function todoList() {

  function todoAdd(){
    let addBtn = document.getElementById('criar-tarefa');
    addBtn.addEventListener('click', add);

    function add() {
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
      }
    }
  }
  todoAdd();

  function todoSelect() {
    let tasks = document.getElementsByTagName('li');
    for(let i = 0; i < tasks.length; i += 1) {
      tasks[i].addEventListener('click', doThis);
    }
    function doThis(evt) {
      evt.target.style.backgroundColor = 'yellow';
    }
  }
  todoSelect();
}