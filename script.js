const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const buttonApagaTudo = document.querySelector('#apaga-tudo');
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
const buttonSalvarTarefas = document.querySelector('#salvar-tarefas');
const inputCriarTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

let tarefas = [];
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
		tarefas.push(li.innerHTML);
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
		tarefas.push(li.innerHTML);
		}
	}
})

// Utilizando  para manter as li's ao fechar a página
buttonSalvarTarefas.addEventListener('click', () => {
	if (localStorage.length == 0) {
		if (tarefas != '') {
			let tarefasAdicionadas = tarefas;
			localStorage.setItem('tasks', tarefasAdicionadas);
		}

	} else {
		tarefasAdicionadas = tarefas;
	}

})

// Apaga de um em um
// buttonApagaTudo.addEventListener('click', () => {
// 	let lis = document.querySelectorAll('.task');
// 	for (index in lis) {
// 		lis[0].remove()
// 	}
// })
