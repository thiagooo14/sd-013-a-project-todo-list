const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const buttonApagaTudo = document.querySelector('#apaga-tudo');
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
const buttonSalvarTarefas = document.querySelector('#salvar-tarefas');
const inputCriarTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const removerSelecionado = document.querySelector('#remover-selecionado');
const moverCima = document.querySelector('#mover-cima');
const moverBaixo = document.querySelector('#mover-baixo');

let tarefas = [];
let tasks = {};
let gray = '';
let sublimed = [];

// Função para adicionar uma tarefa na lista clicando no botão CriarTarefa
buttonCriarTarefa.addEventListener('click', () => {
	if (inputCriarTarefa.value != '') {
		let li = document.createElement('li');
		li.innerText = inputCriarTarefa.value;
		li.className = 'task';
		listaTarefas.appendChild(li);
		inputCriarTarefa.value = '';
		li = document.querySelector('#lista-tarefas').lastElementChild;
		let tasks = {
			text: li.innerText,
			class: li.className
		}
		tarefas.push(tasks);
	}
})

// Adiciona a cor cinza de background apenas para as li's
listaTarefas.addEventListener('click', (event) => {
	// Esses if's são para não colocar a cor cinza de background na ol
	if (gray === '') {
		event.target.classList.add('gray');
		gray = document.querySelector('.gray');
	} else if (event.target == listaTarefas) {
	} else {
		gray.classList.remove('gray');
		event.target.classList.add('gray');
		gray = document.querySelector('.gray');
	}
})

// Adiciona um risco na frente do texto das li's
listaTarefas.addEventListener('dblclick', (event) => {
	if (event.target == listaTarefas) {
	} else if (event.target.classList.contains('completed')) {
		event.target.classList.remove('completed')
		let sub = event.target;
		sublimed.pop(sub);
	} else {
		event.target.classList.add('completed');
		let sub = event.target;
		sublimed.push(sub);
	}
})

// Apaga todas as li's
buttonApagaTudo.addEventListener('click', () => {
	listaTarefas.innerText = '';
})

// Remove apenas as li's sublinhadas
buttonRemoverFinalizados.addEventListener('click', () => {
	for (let index = 0; index < sublimed.length; index++) {
		sublimed[index].remove();
	}
	sublimed = [];
})

// Função para adicionar uma tarefa na lista apertando enter
inputCriarTarefa.addEventListener('keypress', (event) => {
	if (event.keyCode == 13) {
		if (inputCriarTarefa.value != '') {
		let li = document.createElement('li');
		li.innerText = inputCriarTarefa.value;
		li.className = 'task';
		listaTarefas.appendChild(li);
		inputCriarTarefa.value = '';
		li = document.querySelector('#lista-tarefas').lastElementChild;
		let tasks = {
			text: li.innerText,
			class: li.className
		}
		tarefas.push(tasks);
		}
	}
})

// Utilizando localStorage para manter as li's ao fechar a página
buttonSalvarTarefas.addEventListener('click', () => {
	if (localStorage.length == 0) {
		if (tarefas != []) {
			let tarefasAdicionadas = tarefas;
			localStorage.setItem('tasks', JSON.stringify(tarefasAdicionadas));
		}

	} else {
		tarefasAdicionadas = tarefas;
		localStorage.setItem('tasks', JSON.stringify(tarefasAdicionadas));
	}
})

function retomaElementos () {
	for (index in localStorage.getItem('tasks')) {
		console.log('olá, mundo!');
	}
}

retomaElementos();

// Remove o item selecionado
removerSelecionado.addEventListener('click', () => {
	let selecionado = document.querySelector('.gray');
	selecionado.remove();
})

// Mover elemento para cima
moverCima.addEventListener('click', () => {
	if (listaTarefas.firstElementChild.classList.contains('gray') == false) {
		let selecionado = document.querySelector('.gray');
		let selecionadoCima = document.querySelector('.gray').previousElementSibling;
		let text = selecionado.innerText;
		selecionado.innerText = selecionadoCima.innerText;
		selecionadoCima.innerText = text;
		selecionado.classList.remove('gray');
		selecionadoCima.classList.add('gray');
	}
})

// Mover elemento para baixo
moverBaixo.addEventListener('click', () => {
	if (listaTarefas.lastElementChild.classList.contains('gray') == false) {
		let selecionado = document.querySelector('.gray');
		let selecionadoBaixo = document.querySelector('.gray').nextElementSibling;
		let text = selecionado.innerText;
		selecionado.innerText = selecionadoBaixo.innerText;
		selecionadoBaixo.innerText = text;
		selecionado.classList.remove('gray');
		selecionadoBaixo.classList.add('gray');
	}
})

// Apaga de um em um
// buttonApagaTudo.addEventListener('click', () => {
// 	let lis = document.querySelectorAll('.task');
// 	for (index in lis) {
// 		lis[0].remove()
// 	}
// })
