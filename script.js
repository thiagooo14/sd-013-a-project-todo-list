const list = document.getElementById('lista-tarefas');
const buttao = document.getElementById('criar-tarefa');

buttao.addEventListener('click', function addTask() {
  const newTask = document.getElementById('texto-tarefa').value;
  const newLi = document.createElement('li');
  newLi.innerHTML = newTask;
  list.appendChild(newLi);
  newLi.classList.add('item');
  document.getElementById('texto-tarefa').value = '';
});

buttao.addEventListener('click', function addTask() {
  let newTask = document.getElementById('texto-tarefa').value;
  newTask = '';
});

const itemObj = document.getElementsByClassName('item');

list.addEventListener('click', function changeColor(clickEvent) {
  const listObj = clickEvent.target;
  const varia = document.getElementsByClassName('grayTask')[0];

  for(let i = 0; i < itemObj.length; i += 1){
    itemObj[i].classList.remove('grayTask');
  }

    listObj.classList.add('grayTask');
  

  let grayItem = document.getElementsByClassName('grayTask')[0];


  // grayItem.style.backgroundColor = 'rgb(128,128,128)'
});

list.addEventListener('dblclick', function taskCompleted(dblclickEvent) {
  if(dblclickEvent.target.classList == 'item grayTask'){
  dblclickEvent.target.classList.add('completed');
  } else {
    dblclickEvent.target.classList.remove('completed')
  }
});

let bClear = document.getElementById("apaga-tudo");

bClear.addEventListener('click', function clear() {
  list.innerHTML = ''
});

let clearLast = document.getElementById('apaga-ultimo');
clearLast.addEventListener('click', function clearLast() {
  let select = list.lastChild;
  list.removeChild(select);
});