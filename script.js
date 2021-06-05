function questionOne() {
  const header = document.createElement('header');
  const h3 = document.createElement('h3');
  h3.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h3);
  document.body.appendChild(header);
}
questionOne();

function questionTwo() {
  const p = document.createElement('p');
  p.setAttribute('id', 'funcionamento');
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  document.body.appendChild(p);
}
questionTwo();

function questionThree() {
  let input = document.createElement('input');
  input.setAttribute('id', 'texto-tarefa');
  input.setAttribute('type', 'input');
  document.body.appendChild(input);
}
questionThree();

function questionFour() {
  let ol = document.createElement('ol');
  let li = document.createElement('li');
  ol.setAttribute('id', 'lista-tarefas');
  ol.appendChild(li);
  document.body.appendChild(ol);
}
questionFour();
