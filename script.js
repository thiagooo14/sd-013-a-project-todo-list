function fnAddTask() {  
  let strText = document.getElementById('texto-tarefa').value; // texto do input  
  if (strText != "") {
    let elementLi = document.createElement('LI'); // Criei um elemento li
    elementLi.className = 'task';
    let strTextNode = document.createTextNode(strText);
    // elementLi.innerHTML = strText;
    elementLi.appendChild(strTextNode); // Primeiro eu appendo o textNode no elemento li      
    elementLi.addEventListener('click', respondSingleClick);
    elementLi.addEventListener('dblclick', respondDoubleClick);
    let getOrderList = document.getElementById('lista-tarefas');
    getOrderList.appendChild(elementLi);
  }
  document.getElementById('texto-tarefa').value = "";
  // addListenerClickToList();
  // addListenerDoublelClickToList();
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

function respondSingleClick(Event) {
  
  let allLi = document.getElementsByClassName('task-selected');
  for (let li of allLi) {
    li.className = 'task';
    li.style.backgroundColor = 'rgb(255,255,255)';
  }

  let allLiCompleted = document.getElementsByClassName('completed');
  for (let liCompleted of allLiCompleted) {
    liCompleted.style.backgroundColor = 'rgb(255,255,255)';
  }  

  if (Event.target.className != 'completed') {
    Event.target.className = 'task-selected';
    Event.target.style.backgroundColor = 'rgb(128,128,128)';          
  }  else {
    Event.target.className = 'completed';
    Event.target.style.backgroundColor = 'rgb(128,128,128)';              
  }
}

// function addListenerClickToList() {
//   let listElements = document.getElementsByTagName('li');  
//   for (let index = 0; index < listElements.length; index += 1) {
//     let li = listElements[index];
//     li.addEventListener('click', function(elemento) {
//       let actualClass = elemento.target.className;
//       if (actualClass !== 'completed') {
//         elemento.target.className = "task-selected";
//         elemento.target.classList = "task-selected";
//         elemento.target.style.backgroundColor = 'rgb(128,128,128';        
//       } else {
//         elemento.target.className = "completed";
//         elemento.target.classList = "completed";
//         elemento.target.style.backgroundColor = 'rgb(128,128,128';
//       }     
      
//       for (let i = 0; i < listElements.length; i += 1) {
//         if (i != index) {
//           if (listElements[i].className !== 'completed') {
//             listElements[i].className = 'task';  
//             listElements[i].classList = 'task';  
//             listElements[i].style.backgroundColor = 'rgb(255,255,255)';
//           } else {
//             listElements[i].style.backgroundColor = 'rgb(255,255,255)';
//           }
//         }
//       }      
//     })
//   }
// }

function respondDoubleClick(Event) {
  let actualClass = Event.target.className;
  if (actualClass != 'completed') {
    Event.target.className = 'completed';
    Event.target.style.textDecoration = 'line-through solid rgb(0,0,0)';
    Event.target.style.backgroundColor = 'rgb(255,255,255)';
  } else {
    Event.target.className = 'task';
    Event.target.style.textDecoration = 'none';
    Event.target.style.backgroundColor = 'rgb(255,255,255)';
  }
}

// function addListenerDoublelClickToList() {
//   let listElements = document.getElementsByTagName('li');  
//   for (let index = 0; index < listElements.length; index += 1) {
//     let li = listElements[index];
//     li.addEventListener('dblclick', function(elemento) {
//       // elemento.removeEventListener('click')
//       let actualClass = elemento.target.className;
//       let actualClassList = elemento.target.classList[0];
//       if (actualClass !== "completed" || actualClassList !== "completed") {
//         elemento.target.className = "completed";
//         elemento.target.classList[0] = "completed";
//         elemento.target.style.textDecoration = 'line-through solid rgb(0,0,0)';        
//       } else {
//         elemento.target.className = "task-selected";
//         elemento.target.classList[0] = "task-selected";
//         elemento.target.style.textDecoration = 'none';
//       }
//     })
//   }
// }
