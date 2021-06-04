/* Requisito 5 */

const button = document.getElementById('criar-tarefa');

function adicionaTarefa() {
  const tarefa = document.getElementById('texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const li = document.createElement('li');
  li.textContent = tarefa.value;
  lista.appendChild(li);
  tarefa.value = '';
  tarefa.focus();

  localStorage.setItem('Elemento adicionaro', li.textContent);
}
button.addEventListener('click', adicionaTarefa);

/* Requisito 7 */

let listaOrdenada = document.querySelector('#lista-tarefas');

function printList(event) {
  const liClicado = event.target;
  liClicado.classList.add('color');
 }
listaOrdenada.addEventListener('click', printList);

/* Requisito 8 */

const tarefas = document.getElementsByTagName('li');

function justOneElement(event) {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('color');
  }
  const liClicado = event.target;
  liClicado.classList.add('color');
}
listaOrdenada.addEventListener('click', justOneElement);

/* Requisito 9 */

function riscaItem(event) {
  const liFinalizado = event.target;
  liFinalizado.classList.toggle('completed');

}

listaOrdenada.addEventListener('dblclick', riscaItem);

/* Requisito 10 */

function clear() {
  const buttonClear = document.getElementById('apaga-tudo');
  listaOrdenada = document.getElementById('lista-tarefas');

  buttonClear.addEventListener('click', function () {
    const lista = document.getElementsByTagName('li');
    for (let index = 0; index < lista.length; index += 1) {
      listaOrdenada.removeChild(lista[index]);
      index -= 1;
    }
  });
}
clear();

/* Requisito 11 */

function clearFinishedItens() {
  const button3 = document.getElementById('remover-finalizados');
  listaOrdenada = document.getElementById('lista-tarefas');

  button3.addEventListener('click', function () {
    const lista = document.getElementsByClassName('completed');
    for (let index = 0; index < lista.length; index += 1) {
      lista[index].remove();
      index -= 1;
    }
  });
}

clearFinishedItens();

/* Requisito 12 */

window.onload = function inicializar() {
  button4.addEventListener('click', saveMyList);
};

function saveMyList() {
  localStorage.listaOrdenada = listaOrdenada.innerHTML;
}
  const button4 = document.getElementById('salvar-tarefas');

  if (typeof Storage !== 'undefined') {
    listaOrdenada.innerHTML = localStorage.listaOrdenada;
  }


/* Requisito 13 */

// Evento change //

/* Referências */

// Requisito 5 - https://www.youtube.com/watch?v=ucfNgEl_Vcw
// Requisoto 6 - Aula de revisão Fernando
// Requisito 10 - Slack, duvida de um aluno da Turna 10 - B // Levei bastante tempo, pois limpava apenas metade da lista, por isso o decremento em -1 no indice!
// Requisito 12 - Portfólio Ana Ventura, turma 10. https://github.com/tryber/sd-010-a-project-todo-list/pull/71#issuecomment-796420696
// Requisito 12 - https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
