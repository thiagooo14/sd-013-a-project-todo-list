function createHeaderChild() {
  const headContainer = document.querySelector('#head-container');
  const newTitle = document.createElement('h1');
  newTitle.innerText = 'Minha Lista de Tarefas';
  newTitle.setAttribute('id', 'title-h1');
  headContainer.appendChild(newTitle);

  const newParagraph = document.createElement('p');
  newParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  newParagraph.setAttribute('id', 'funcionamento');
  headContainer.appendChild(newParagraph);
}

createHeaderChild();

function createInputBox() {
  const inputBoxContainer = document.querySelector('#input-box');
  const newInputBox = document.createElement('input');
  newInputBox.setAttribute('id', 'texto-tarefa');
  inputBoxContainer.appendChild(newInputBox);
}

createInputBox();
