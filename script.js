let list = document.getElementById('lista-tarefas');
let buttao = document.getElementById('criar-tarefa');

buttao.addEventListener('click', function addTask() {
  let newTask = document.getElementById('texto-tarefa').value;
  let newLi = document.createElement('li');
  newLi.innerHTML = newTask;
  list.appendChild(newLi);
  newLi.classList.add('item');
  document.getElementById('texto-tarefa').value = "";
});

buttao.addEventListener('click', function addTask() {
  let newTask = document.getElementById('texto-tarefa').value;
  newTask = '';
})

let itemObj = document.getElementsByClassName('item');

list.addEventListener('click', function changeColor(clickEvent) {
  let listObj = clickEvent.target;
  let varia = document.getElementsByClassName('grayTask')[0]

    itemObj[0].classList.remove('grayTask');


    listObj.classList.add('grayTask');
  

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

let bClear = document.getElementById("apaga-tudo");

bClear.addEventListener('click', function clear() {
  for(i = 0; i < document.getElementsByClassName('item').length; i += 1){
    let removeItem =  document.getElementsByClassName('item')[i]
    let lista = document.getElementById('lista-tarefas')
    lista.removeChild(removeItem);
  }
})