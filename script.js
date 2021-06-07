// atributos.
const lista = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const botaoCria = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const marcacao = document.getElementsByClassName('completed');
const removeComp = document.getElementById('remover-finalizados');
const itens = document.querySelectorAll('.item');
// adiciona itens

botaoCria.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTarefa.value;
  lista.appendChild(item);
  inputTarefa.value = '';
  item.className = 'item';
  // adiciona evento de click já na criação da Li.
  item.addEventListener('click', () => {
    item.className = 'item completed';
    item.add
    item.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  item.addEventListener('dblclick', () => {
    item.className = 'item';
  });
});

// apagar tudo.
apagaTudo.addEventListener('click', () => {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
});

// remover itens finalizados.

removeComp.addEventListener('click', () => {
  for (let i = 0; i <= marcacao.length; i += 1) {
    marcacao[i].remove();
  }
});
