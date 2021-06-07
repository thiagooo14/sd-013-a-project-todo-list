//------------------------------------------------------------------//
//---------------------------REQUISITO 5----------------------------//
//------------------------------------------------------------------//

function addTask() {
  let valueInput = document.querySelector("#texto-tarefa");
  let list = document.createElement('li');
  list.innerHTML = valueInput.value
  list.classList.add('tasks')
  document.querySelector("#lista-tarefas").appendChild(list)
  valueInput.value = "";
}

//------------------------------------------------------------------//
//---------------------------REQUISITO 7 e 8------------------------//
//------------------------------------------------------------------//

const ol = document.querySelector('#lista-tarefas');
const lis = document.getElementsByTagName('li');
ol.addEventListener('click', (event) => {
if (event.target.classList.contains('tasks')) {
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].classList.contains('selected')){
    lis[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
});

//------------------------------------------------------------------//
//---------------------------REQUISITO 9----------------------------//
//------------------------------------------------------------------//

ol.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
})
