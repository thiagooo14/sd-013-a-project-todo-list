const lista = document.getElementById('lista-tarefas');
let li = '';

function getTextoTarefa() {
  return document.getElementById('texto-tarefa').value;
}

function clearTextoTarefa() {
  document.getElementById('texto-tarefa').value = '';
}

// Requirement 8
function clearSelection() {
  const liArray = lista.childNodes;
  // Por que não funciona com for in?!?!?!
  // for (let i in liArray) {
  //   liArray[i].style.backgroundColor = 'white';
  // }
  for (let i = 0; i < liArray.length; i += 1) {
    liArray[i].style.backgroundColor = 'white';
  }
}

function addListener() {
  li.addEventListener('click', (event) => {
    clearSelection();
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// Requirement 9
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
function doubleClick() {
  li.addEventListener('dblclick', (event) => event.target.classList.toggle('completed'));
}

// Requirements 5, 6, 7
function criarTarefa() {
  li = document.createElement('li');
  li.innerText = getTextoTarefa();
  lista.appendChild(li);
  clearTextoTarefa();
  doubleClick();
  addListener();
}
