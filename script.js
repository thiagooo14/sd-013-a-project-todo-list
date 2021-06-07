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
    // Event.target.id = 'taskSelected'
    Event.target.style.backgroundColor = 'rgb(128,128,128)';          
  }  else {
    Event.target.className = 'completed';
    Event.target.id = 'taskSelected'
    Event.target.style.backgroundColor = 'rgb(128,128,128)';              
  }
}

function respondDoubleClick(Event) {
  let actualClass = Event.target.className;
  if (actualClass != 'completed') {
    Event.target.className = 'completed';
    // Event.target.id = 'taskSelected'
    Event.target.style.textDecoration = 'line-through solid rgb(0,0,0)';
    Event.target.style.backgroundColor = 'rgb(255,255,255)';
  } else {
    Event.target.className = 'task';
    Event.target.style.textDecoration = 'none';
    Event.target.style.backgroundColor = 'rgb(255,255,255)';
  }
}

let btnApagaTudo = document.getElementById('apaga-tudo');
btnApagaTudo.addEventListener('click', function() {
  // Só funciona com o querySelector pois o 'Child' é usado para os nós (Nodes)
  let olTasks = document.querySelector('#lista-tarefas');   
  while (olTasks.hasChildNodes()) {
    olTasks.removeChild(olTasks.firstChild);
  }
  localStorage.clear();
});

let btnRemoverFinalizados = document.getElementById('remover-finalizados');
btnRemoverFinalizados.addEventListener('click', function() {
  // let finishList = document.getElementsByClassName('completed');
  // finishList.parentNode.removeChild(finishList);
  let allList = document.getElementsByTagName('li');  
  for (let index = allList.length - 1; index >= 0; index -= 1) {
    if (allList[index].className == 'completed') {
      allList[index].remove();
  }
}
  // for (let list of allList) {    
  //   if (list.className == 'completed') {
  //     list.remove();
  //   }
  // }
})

let btnSalvarTarefas = document.getElementById('salvar-tarefas');
btnSalvarTarefas.addEventListener('click', function() {
  let allList = document.getElementsByTagName('li');  
  // let objListToSave = {};
  // objListToSave.indice = indice;
  // objListToSave.valor = valor;
  
  // let arrMarker = [];
  let arrClass = [];
  let arrInnerText = [];
  
  for (let index = 0; index < allList.length; index += 1) {
    arrClass.push(allList[index].className);
    arrInnerText.push(allList[index].innerHTML);
  }

  localStorage.setItem("class", arrClass);
  localStorage.setItem("innerHtml", arrInnerText);

  // localStorage.setItem("class", allList[index].className);
  // localStorage.setItem("backColor", allList[index].style.backgroundColor);
  // localStorage.setItem("textDecor", allList[index].style.textDecoration);
  // localStorage.setItem("innerHtml", allList[index].innerHTML);
  // localStorage.setItem("tag", allList[index].localName);

})

// document.addEventListener('load', recoverData())

window.onload = recoverData

// recoverData();

function recoverData() {
  // alert('pagina carregada');
  // if (location.reload == true) {  
    // Consultado no stackoverflow ====================
    // let arrayOfKeys = Object.keys(localStorage);
    let arrayOfValues = Object.values(localStorage);
    // ===================================================
    if (arrayOfValues.length > 0) {
      // return;
      let arrClass = arrayOfValues[0].split(",");
      let arrInnerText = arrayOfValues[1].split(",");
  
      // let dictTask = {};
  
      for (let index = 0; index < arrClass.length; index += 1) {
        strClass = arrClass[index]; // Class e InnerHTML    
        strInnerHtml = arrInnerText[index]; // valores        
        
        // dictTask = {
        //   Class: strKey,
        //   InnerHtml: strValues      
        // }    
        
        fnInputDataOfLocalStorage(strClass, strInnerHtml);
      }      
    } 
  // }
}

function fnInputDataOfLocalStorage(strClass, strInnerHtml) {  
  document.getElementById('texto-tarefa').value = strInnerHtml
  let strText = document.getElementById('texto-tarefa').value; // texto do input  
  if (strText != "") {
    let elementLi = document.createElement('LI'); // Criei um elemento li
    elementLi.className = strClass;
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

function fnMoverCima() {
  let elTaskSelected = document.querySelectorAll('.task-selected,.completed')[0];    
  if (elTaskSelected == null || elTaskSelected == undefined) {
    return
  }
  let elTaskAbove = elTaskSelected.previousElementSibling;
  if (elTaskAbove == null) {
    return
  }
  let elPai = elTaskSelected.parentNode //document.querySelector('ol');
  elPai.insertBefore(elTaskSelected, elTaskAbove);
}

let btnMoverParaCima = document.querySelector('#mover-cima');
btnMoverParaCima.addEventListener('click', fnMoverCima);


function fnMoverBaixo() {
  let elTaskSelected = document.querySelectorAll('.task-selected,.completed')[0];
  if (elTaskSelected == null || elTaskSelected == undefined) {
    return
  }
  let elTaskBellow = elTaskSelected.nextElementSibling;
  if (elTaskBellow == null || elTaskBellow == undefined) {
    return
  }
  let elPai = elTaskSelected.parentNode //document.querySelector('ol');
  elPai.insertBefore(elTaskBellow, elTaskSelected);  
}

let btnMoverParaBaixo = document.querySelector('#mover-baixo');
btnMoverParaBaixo.addEventListener('click', fnMoverBaixo);

function fnRemoverSelecionado() {
  let elTaskSelected = document.querySelectorAll('.task-selected,#taskSelected')[0];
  if (elTaskSelected == null || elTaskSelected == undefined) {
    return
  }
  elTaskSelected.remove();
}

let btnRemoverSelecionado = document.querySelector('#remover-selecionado');
btnRemoverSelecionado.addEventListener('click', fnRemoverSelecionado);

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
