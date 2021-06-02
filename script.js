function fnAddTask() {  
  let strText = document.getElementById('texto-tarefa').value; // texto do input  
  if (strText != "") {
    let elementLi = document.createElement('LI'); // Criei um elemento li
    elementLi.className = 'task';
    let strTextNode = document.createTextNode(strText);
    // elementLi.innerHTML = strText;
    elementLi.appendChild(strTextNode); // Primeiro eu appendo o textNode no elemento li  
    let getOrderList = document.getElementById('lista-tarefas');
    getOrderList.appendChild(elementLi);
  }
  document.getElementById('texto-tarefa').value = "";
  addListenerToList();
}

let btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', fnAddTask);

let inputField = document.getElementById('texto-tarefa');
inputField.addEventListener('keyup', function(event) {  
  let tecla = event.which || event.keycode
  if (tecla == 13) {
    fnAddTask();
  }
})

function addListenerToList() {
  let listElements = document.getElementsByTagName('li');  
  for (let index = 0; index < listElements.length; index += 1) {
    let li = listElements[index];
    li.addEventListener('click', function(elemento) {
      elemento.target.className = "task selected";
      elemento.target.style.backgroundColor = 'rgb(128,128,128';
      for (let i = 0; i < listElements.length; i += 1) {
        if (i != index) {
          listElements[i].className = 'task';
          listElements[i].style.backgroundColor = 'rgb(255,255,255)'
        }
      }
    })
  }
}

