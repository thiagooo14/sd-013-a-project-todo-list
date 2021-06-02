window.onload = function(){

// declarando variaveis..
  var textInput = document.getElementById("texto-tarefa");
  var buttonInputTesk = document.getElementById("criar-tarefa");
  var itensOl = document.getElementById("lista-tarefas");

// função para adicionar tesks
  function addTask() {
    if(textInput.value.length !== 0) { // verifica se o texto é diferente de 0 / vazio
      let newLi = document.createElement("li"); // cria uma li 
      itensOl.appendChild(newLi); // coloca li como filho da Ol
      newLi.innerText = textInput.value; // transferi o valor do input em um novo item da lista
      textInput.value = ""; // limpa input depois da adição
    }
  }
buttonInputTesk.addEventListener("click", addTask);









}