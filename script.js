window.onload = function () {

	let addTaskButton = document.getElementById('criar-tarefa')
	let listaOrd = document.getElementById('lista-tarefas'); 
  let eraseButton = document.getElementById('apaga-tudo')
	
		
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
  	
};