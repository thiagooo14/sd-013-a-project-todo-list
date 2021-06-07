// QUESTÃO 1
function adicionaHeader () {
  let novaHeader = document.createElement('header');
  let novoH1 = document.createElement('h1');
  novoH1.innerText = "Minha Lista de Tarefas"
  novaHeader.appendChild(novoH1);
  document.body.appendChild(novaHeader);
}
adicionaHeader()

// QUESTÃO 2
function adicionaP () {
  let novaP = document.createElement('p');
  novaP.innerText = "Clique duas vezes em um item para marcá-lo como completo"
  novaP.setAttribute("id", "funcionamento");
  let elementoPai = document.querySelector("header");
  elementoPai.appendChild(novaP);
}
adicionaP()

//QUESTÃO 3
function adicionaInput () {
  let novoInput = document.createElement('input');
  novoInput.setAttribute("id", "texto-tarefa");
  novoInput.setAttribute("type", "text");
  let paiInput = document.querySelector("header");
  paiInput.appendChild(novoInput);
}
adicionaInput()