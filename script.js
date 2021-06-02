const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const inputCriarTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

buttonCriarTarefa.addEventListener('click', () => {
	let li = document.createElement('li');
	li.innerText = inputCriarTarefa.value;
	listaTarefas.appendChild(li);
	inputCriarTarefa.value = '';
})