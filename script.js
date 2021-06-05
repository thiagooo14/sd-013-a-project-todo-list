const textInput = document.querySelector('#texto-tarefa');
const botaoAdc = document.querySelector('#criar-tarefa');
// let listaOrdenada = document.querySelector('#lista-tarefas');
const item = document.querySelectorAll('li');

//Adicionar Lista Ordenada
let listaOrdenada = document.createElement('ol');
document.body.appendChild(listaOrdenada);
listaOrdenada.setAttribute("id" , "lista-tarefas");
// listaOrdenada.addEventListener('click', mudaCor)

//Adicionar Botão
function adicionaTarefa() {
let item = document.createElement('li');
listaOrdenada.appendChild(item);
item.innerHTML = textInput.value;
textInput.value = "";
item.addEventListener('click', mudaCor);
item.addEventListener('dblclick', duploClick)		
 }

botaoAdc.addEventListener('click', adicionaTarefa)

// Adiciona cor ao item clicado.

function mudaCor(event){
	for (let i = 0; i < item.length; i += 1){
		item[i].removeAttribute('class');
	}
		event.target.classList.toggle('selected');
}


// function mudaCor(event){
	
// 			removeStyles();
// 			event.target.classList.toggle('selected');
// 	}


// function removeStyles(){
// 	{
// 		item[i].removeAttribute('class');
// 	}
// }

//EFEITO RISCADO
function duploClick(event){
	event.target.classList.toggle('completed');
}

// BOTÃO LIMPAR LISTA
const botaoLimpar = document.querySelector('#apaga-tudo');
console.log(botaoLimpar)

function limparLista(){
	remove(item)
	// for(let i = 0;i < item.length;i++){
	// 	item[i].innerHTML=""
	// }
}
botaoLimpar.addEventListener('click', limparLista)
