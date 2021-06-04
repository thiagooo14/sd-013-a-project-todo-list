const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

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
addTask(); //Chama a função


/* Adicionar a cor rgb(128, 128, 128) ao clicar nos itens da lista */
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
  list.addEventListener('click', itemColorChange); //Evento "ao clicar" realiza a função para mudar a cor de fundo
}
  
changeColor();