let list = document.getElementById('lista-tarefas');
let buttao = document.getElementById('criar-tarefa');

buttao.addEventListener('click', function addTask() {
  let newTask = document.getElementById('texto-tarefa').value;
  let newLi = document.createElement('li');
  newLi.innerHTML = newTask;
  list.appendChild(newLi);
  newLi.classList.add('item');
  list.clear();
});
let itemObj = document.getElementsByClassName('item');
list.addEventListener('click', function changeColor(clickEvent) {
  let listObj = clickEvent.target;
  if(document.getElementsByClassName('grayTask').length !== 0)
  for(i = 0; i <= itemObj.length; i += 1){
    itemObj[i].classList.remove('grayTask');listObj.classList.add('grayTask');
  }

  listObj.classList.add('grayTask');
  // let grayItem = document.getElementsByClassName('grayTask')[0];


  // grayItem.style.backgroundColor = 'rgb(128,128,128)'
});

list.addEventListener('dblclick', function taskCompleted(dblclickEvent) {
  if(dblclickEvent.target.classList == 'item grayTask'){
  dblclickEvent.target.classList.add('completed');
  } else {
    dblclickEvent.target.classList.remove('completed')
  }
});