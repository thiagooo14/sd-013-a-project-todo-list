function createOl() {
  const paiOl = document.querySelector('#OrganizaOl');
  const ordenedList = document.createElement('ol');
  ordenedList.id = 'lista-tarefas';
  paiOl.appendChild(ordenedList);
}

createOl();

const paiLi = document.getElementsByTagName('ol')[0];
function createOlItem() {
  const input1 = document.getElementById('texto-tarefa').value;
  if (input1.value === '') {
    alert('item inválido');
  } else {
    const listItem = document.createElement('li');
    listItem.innerHTML = input1;
    document.getElementById('texto-tarefa').value = '';
    paiLi.appendChild(listItem);
  }
}

// onclick="document.getElementById('texto-tarefa').value = ''"
function verifyLi() {
  const getLis = document.getElementsByTagName('li');
  for (let indice = 0; indice < getLis.length; indice += 1) {
    getLis[indice].addEventListener('click', (e) => {
      for (let i = 0; i < getLis.length; i += 1) {
        getLis[i].classList = '';
        e.target.classList = 'selected';
      }
    });
  }
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createOlItem);
button.addEventListener('click', verifyLi);
