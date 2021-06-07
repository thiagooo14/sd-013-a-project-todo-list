const ol = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

botao.addEventListener('click', () => {
  let criaLi = criaElemento('li', 'lista');
  criaLi.innerText = input.value;
  ol.appendChild(criaLi);
  input.value = '';
  criaLi.addEventListener('click', bgColor);
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
