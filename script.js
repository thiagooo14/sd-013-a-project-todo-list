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
