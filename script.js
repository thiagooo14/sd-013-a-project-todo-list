const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const buttonApagaTudo = document.querySelector('#apaga-tudo');
const inputCriarTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
let tarefas = [];
let gray = '';
let sublimed = [];

// função para adicionar uma tarefa na lista através do botão CriarTarefa
buttonCriarTarefa.addEventListener('click', () => {
	if (inputCriarTarefa.value != '') {
		let li = document.createElement('li');
		li.innerText = inputCriarTarefa.value;
		li.className = 'task';
		listaTarefas.appendChild(li);
		inputCriarTarefa.value = '';
		li = document.querySelector('#lista-tarefas').lastElementChild;
		tarefas.push(li);
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
	} else if (event.target.classList.contains('sublimed')) {
		event.target.classList.remove('sublimed')
		let sub = event.target
		sublimed.pop(sub)
	} else {
		event.target.classList.add('sublimed');
		let sub = event.target
		sublimed.push(sub)
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

// Apaga de um em um
// buttonApagaTudo.addEventListener('click', () => {
// 	let lis = document.querySelectorAll('.task');
// 	for (index in lis) {
// 		lis[0].remove()
// 	}
// })
