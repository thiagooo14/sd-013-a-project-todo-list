window.onload = function () {

let addTaskButton = document.getElementById('criar-tarefa')


addTaskButton.addEventListener('click', addTask);

function addTask(evento) {
  let textValue = document.getElementById('texto-tarefa').value;
	if (textValue != "") {
		let line = document.createElement('li')
		document.getElementById('lista-tarefas').appendChild(line);
		line.innerText = textValue;
		document.getElementById('texto-tarefa').value = "";
	} else {
		alert ('Insira uma tarefa!');
	};
};











}