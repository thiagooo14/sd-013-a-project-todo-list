// Cria uma lista ordenada (ol)
function createOrderedList() {
  const lista = document.getElementById('ol-tarefas');
  const listaOrdenada = document.createElement('ol');
  listaOrdenada.setAttribute('id', 'lista-tarefas');
  lista.appendChild(listaOrdenada);
}
createOrderedList();

// Cria a lista de tarefas as (li)
function createLi() {
  const tarefas = document.getElementById('lista-tarefas');
  const inputTarefa = document.getElementById('texto-tarefa');
  const btn = document.getElementById('criar-tarefa');
  btn.addEventListener('click', (event) => {
    const lista = document.createElement('li');
    lista.setAttribute('id', 'lista-li');
    lista.innerText = inputTarefa.value;
    tarefas.appendChild(lista);
    inputTarefa.value = '';
  });
}
createLi();

// Alterar a cor de fundo do item da lista quando clicado
// Não permite selecionar mais de um elemento da lista ao mesmo tempo
function mudaCorDoFundo() {
  const listOl = document.querySelector('ol');
  const listLi = document.getElementsByTagName('li');
  listOl.addEventListener('click', (event) => {
    for (let index = 0; index < listLi.length; index += 1) {
      const li = listLi[index];
      li.style.backgroundColor = 'rgb(128, 128, 128)';
      li.style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
mudaCorDoFundo();
