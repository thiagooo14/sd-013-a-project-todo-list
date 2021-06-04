const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonRemove = document.getElementById('apaga-tudo')

//Botão para adicionar o texto do input na lista "ol".
function addTask() {
  function newListItem() {
  let textInput = input.value; /* textInput vai receber o texto no input da lista. */
  let listItem = document.createElement('li'); /* listItem cria uma "li". */

  listItem.innerHTML = textInput; /* Adiciona texto do input na lista ordenada */
  
  list.appendChild(listItem);
  input.value = '';
  /* Adiciona listItem (li) como filho da list e volta a deixar o input vazio o fazendo receber uma string vazia. */
  }
  button.addEventListener('click', newListItem);
  }
addTask(); //Chama a função.


/* Adicionar a cor rgb(128, 128, 128) ao clicar nos itens da lista. */
function changeColor() {
  function itemColorChange(event) {
    let listaLi = document.getElementsByTagName('li');
    for (let i = 0; i < listaLi.length; i += 1) { 
      if (listaLi[i].classList.contains('color-change')) { 
        listaLi[i].classList.remove('color-change'); // Garante que a classe "color-change" esteja somente em um elemento. 
      }
    }
    event.target.classList.add('color-change');
  }
  list.addEventListener('click', itemColorChange); //Evento "ao clicar" realiza a função para mudar a cor de fundo.
}
  
changeColor();

// Clique duplo para riscar tarefa completada.
function completed() {
  list.addEventListener('dblclick', (event) => { // "dbclick" evento para o clique duplo
    event.target.classList.toggle('completed'); /* Toggle - Quando apenas um argumento está presente: Toggle class value; Ou seja, se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true.
    Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o. Retirado deste link https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList */
  })
}
completed();

// Botão para remover tarefas da lista.
function remove() {
  while (list.firstElementChild !== null) { /* Laço while retirado deste link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while */   
    list.removeChild(list.firstElementChild); // Se o primeiro elemento filho for diferente de null (vazio), ele é removido.
  }
  }
buttonRemove.addEventListener('click', remove); // Aciona o evento com um clique.