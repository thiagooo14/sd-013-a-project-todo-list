function fnAddTask() {  
  let strText = document.getElementById('texto-tarefa').value; // texto do input  
  if (strText != "") {
    let elementLi = document.createElement('LI'); // Criei um elemento li
    let strTextNode = document.createTextNode(strText);
    // elementLi.innerHTML = strText;
    elementLi.appendChild(strTextNode); // Primeiro eu appendo o textNode no elemento li  
    let getOrderList = document.getElementById('lista-tarefas');
    getOrderList.appendChild(elementLi);
  }
  document.getElementById('texto-tarefa').value = "";
}

let btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', fnAddTask, true);