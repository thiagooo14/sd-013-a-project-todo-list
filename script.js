// // Requisito 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
// function adicionaTitulo() {
//   const titulo = document.getElementsByTagName('body')[0];
//   const header = document.createElement('header');
//   header.className = 'boxTitle';
//   titulo.appendChild(header);
//   const h1 = document.createElement('h1');
//   h1.innerHTML = 'Minha Lista de Tarefas';
//   header.appendChild(h1);
// }
// adicionaTitulo();

// // Requisito 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
// function addParagraph() {
//   const h1 = document.getElementsByTagName('h1')[0];
//   const paragraph = document.createElement('p');
//   paragraph.id = 'funcionamento';
//   paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
//   h1.appendChild(paragraph);
// }
// addParagraph();

// // Requisito 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
// function addInput() {
//   const header = document.getElementsByTagName('header')[0];
//   const saida = document.createElement('input');
//   saida.id = 'texto-tarefa';
//   header.appendChild(saida);
// }
// addInput();

// // Requisito 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
// function addListOrder() {
//   const getSaida = document.getElementsByTagName('input')[0];
//   const listOrder = document.createElement('ol');
//   listOrder.id = 'lista-tarefas';
//   getSaida.appendChild(listOrder);
// }
// addListOrder();

// Requsito 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// function addButton() {
//   // const onlyInput = document.getElementsByTagName('input')[0];
//   // const newDiv = document.createElement('div');
//   // onlyInput.appendChild(newDiv);
//   // const div = document.getElementsByTagName('div')[0];
//   const getOl = document.querySelector('#lista-tarefas');
//   const div1 = document.createElement('div');
//   getOl.appendChild(div1);
//   const adicionaBotao = document.createElement('button');
//   adicionaBotao.id = 'criar-tarefa';
//   adicionaBotao.type = 'Submit';
//   adicionaBotao.innerHTML = 'Adicionar';
//   div1.appendChild(adicionaBotao);
// }
// addButton();

// Requsito 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// e
// Requisito 6 - Ordene os itens da lista de tarefas por ordem de criação
function taskAdd() {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');
  const ol = document.getElementById('lista-tarefas');

  button.addEventListener('click', (event) => {
    const texto = input.value;
    const li = document.createElement('li');
    li.innerText = texto;
    ol.appendChild(li);
    input.value = '';
  });
}
taskAdd();

// Requisito 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// e
// Requisito 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
function changeBackgroundColor() {
  const getLi = document.getElementsByTagName('li');
  const getOl = document.querySelector('ol');
  getOl.addEventListener('click', (event) => {
    for (let index = 0; index < getLi.length; index += 1) {
      const li = getLi[index];
      li.style.backgroundColor = 'rgb(128, 128, 128)';
      li.style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
changeBackgroundColor();

// Requisito 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
function buttonClearALl() {
  const btn = document.getElementById('apaga-tudo');

  btn.addEventListener('click', (event) => {
    const listaDeLi = document.querySelectorAll('li');
    for (let i = 0; i < listaDeLi.length; i += 1) {
      const lista = listaDeLi[i];
      lista.remove();
    }
  });
}
buttonClearALl();
