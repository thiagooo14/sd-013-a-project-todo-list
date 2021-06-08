
window.onload = function () {

  let addTaskButton = document.getElementById('criar-tarefa')
	let listaOrd = document.getElementById('lista-tarefas'); 
  let eraseButton = document.getElementById('apaga-tudo');
  let finalizedButton = document.getElementById('remover-finalizados');
  let saveButton = document.getElementById('salvar-tarefas');
  let eraseSelectedButton = document.getElementById('remover-selecionado');
  let upButton = document.getElementById('mover-cima');
  let downButton = document.getElementById('mover-baixo');
	
  addTaskButton.addEventListener('click', addTask);

	function addTask() {
	  let textValue = document.getElementById('texto-tarefa').value;
		if (textValue != "") {
			let line = document.createElement('li')
			document.getElementById('lista-tarefas').appendChild(line);
			line.innerText = textValue;
			line.className = 'line';
			document.getElementById('texto-tarefa').value = "";
		} else {
			alert ('Insira uma tarefa!');
		};
	};

	listaOrd.addEventListener('click', gray);

	function gray (evento) {
		let colorChoose = document.querySelector('.selected');
      if (colorChoose == null) {
        evento.target.classList.add('selected');
      } else {
        colorChoose.classList.remove('selected');
        evento.target.classList.add('selected');
      }
  }
	
  listaOrd.addEventListener('dblclick', crossed);

  function crossed (evento) {
		let lineChoose = evento.target
      lineChoose.classList.toggle('completed') 
  }  
  
  eraseButton.addEventListener('click', erase);

  function erase() {
    let olList = document.querySelectorAll('li');
	  for (let j = 0; j < olList.length; j += 1) {
      olList[j].parentNode.removeChild(olList[j]);
    };    
  };

  finalizedButton.addEventListener('click', eraseCrossed);

  function eraseCrossed () {
    let olList = document.querySelectorAll('li');
    for (let j = 0; j < olList.length; j += 1) {
      if(olList[j].classList.contains('completed') == true)
      olList[j].parentNode.removeChild(olList[j]);
    };
  }

   saveButton.addEventListener('click', saveData);

  function saveData(){
    localStorage.clear();
    localStorage.setItem('list', listaOrd.innerHTML);
  }
  listaOrd.innerHTML = localStorage.getItem('list');
  saveData();

  eraseSelectedButton.addEventListener('click', eraseSelected);

  function eraseSelected () {
    let olList = document.querySelectorAll('li');
    for (let m = 0; m < olList.length; m += 1) {
      if(olList[m].classList.contains('selected') == true)
      olList[m].parentNode.removeChild(olList[m]);
    };
  }

  upButton.addEventListener('click', upItem);

  function upItem (){
    let selectedItem = document.querySelector('.selected');
    if (selectedItem != null) {
      if (selectedItem != listaOrd.firstChild) {
        let itemBefore = selectedItem.previousSibling
        listaOrd.insertBefore(selectedItem, itemBefore);
      }
    }
  }

  downButton.addEventListener('click', downItem);
  
  function downItem (){
    let selectedItem = document.querySelector('.selected');
    if (selectedItem != null) {
      if (selectedItem != listaOrd.lastChild) {
        let itemAfter = selectedItem.nextSibling
        listaOrd.insertBefore(itemAfter, selectedItem);
      }
    }
  }

};