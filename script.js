function createOl() {
	const paiOl = document.querySelector('#OrganizaOl');
	const ordenedList = document.createElement('ol');
	ordenedList.id = 'lista-tarefas';
	paiOl.appendChild(ordenedList);
}

createOl();

const paiLi = document.getElementsByTagName('ol')[0];
function createOlItem() {
	if (document.getElementById('texto-tarefa').value === '') {
		alert('item inválido');
	} else {
		const input = document.getElementById('texto-tarefa').value;
		const listItem = document.createElement('li');
		listItem.innerHTML = input;
		document.getElementById('texto-tarefa').value = '';
		paiLi.appendChild(listItem);
	}
}

// onclick="document.getElementById('texto-tarefa').value = ''"

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createOlItem);

let getLis = document.getElementsByTagName('li');
for (let i = 0; i < getLis.length; i += 1) {
  getLis[i].addEventListener('click' , clickLi)
}
