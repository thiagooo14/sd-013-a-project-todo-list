function createOl() {
  const paiOl = document.querySelector('#OrganizaOl');
  const ordenedList = document.createElement('ol');
  ordenedList.id = 'lista-tarefas';
  paiOl.appendChild(ordenedList);
}

createOl();
// esta parte é responsável por pegar o nome digitado no imput e adiconar a lista;
const paiLi = document.getElementsByTagName('ol')[0];
function createOlItem() {
  const input1 = document.getElementById('texto-tarefa').value;
  const listItem = document.createElement('li');
  if (input1 === '' || input1 === ' ') {
    alert('item Inválido');
  } else {
    listItem.className = 'style-font';
    listItem.innerHTML = input1;
    document.getElementById('texto-tarefa').value = '';
    paiLi.appendChild(listItem);
  }
}

function classeCompleted(e) {
  if (e.target.className.includes('completed') === true) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function verifyLi() {
  const getLis = document.getElementsByTagName('li');
  for (let indice = 0; indice < getLis.length; indice += 1) {
    getLis[indice].addEventListener('dblclick', classeCompleted);
    getLis[indice].addEventListener('click', (e) => {
      for (let i = 0; i < getLis.length; i += 1) {
        getLis[i].classList.remove('selected');
        e.target.classList.add('selected');
      }
    });
  }
}

const buttonClear = document.getElementById('apaga-tudo');
function apagaTudo() {
  const getLis = document.querySelectorAll('li');
  for (let i = 0; i < getLis.length; i += 1) {
    getLis[i].remove();
  }
}

const buttonClearCompleted = document.getElementById('remover-finalizados');
buttonClearCompleted.addEventListener('click', () => {
  const getLisCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < getLisCompleted.length; i += 1) {
    getLisCompleted[i].remove();
  }
});
buttonClear.addEventListener('click', apagaTudo);
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createOlItem);
button.addEventListener('click', verifyLi);

// DBL CLICK TO CHECK LIST;
