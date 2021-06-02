function createHeader() {
  const headContainer = document.querySelector('#head-container');
  let newTitle = document.createElement('h1');
  newTitle.innerText = 'Minha Lista de Tarefas';
  headContainer.appendChild(newTitle);
}

createHeader();
