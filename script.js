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

//Obrigado Luiza Antiques e Josué Lobo pela ajuda.

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

//Obrigado Luiza Antiques e Josué Lobo pelo suporte

//------------------------------------------------------------------//
//--------------------------REQUISITO 10----------------------------//
//------------------------------------------------------------------//

function removeTasks() {
  let ol = document.querySelector('#lista-tarefas')
  while (ol.hasChildNodes()) {
    ol.removeChild(ol.firstChild);
  }
}

//link de suporte: https://www.w3schools.com/jsref/met_node_removechild.asp

