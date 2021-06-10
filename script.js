// Requisito 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
function adicionaTitulo() {
  const titulo = document.getElementsByTagName('body')[0];
  const header = document.createElement('header');
  titulo.appendChild(header);
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Minha Lista de Tarefas';
  header.appendChild(h1);
}
adicionaTitulo();
