const ol = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const botaoApaga = document.getElementById('apaga-tudo');

botao.addEventListener('click', () => {
  let criaLi = criaElemento('li', 'lista');
  criaLi.innerText = input.value;
  ol.appendChild(criaLi);
  input.value = '';
  criaLi.addEventListener('click', bgColor);
  criaLi.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('completed');
  });
});

function criaElemento(nome, classe) {
  let elemento = document.createElement(nome);
  elemento.classList.add(classe);
  return elemento;
}

function bgColor(e) {
  let listItem = document.getElementsByClassName('lista');
  for (let i of listItem) {
    i.style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

botaoApaga.addEventListener('click', () => {
  while (ol.childElementCount > 0) {
    ol.removeChild(ol.lastElementChild);
  }
});
