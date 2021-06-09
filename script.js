window.onload = function(){

// declarando variaveis..
  var textInput = document.getElementById("texto-tarefa");
  var buttonInputTesk = document.getElementById("criar-tarefa");
  var itensOl = document.getElementById("lista-tarefas");

  // função para adicionar tesks
  function addTask() {
    if(textInput.value.length !== 0) { // verifica se o texto é diferente de 0 / vazio.
      let newLi = document.createElement("li"); // cria uma li .
      itensOl.appendChild(newLi); // coloca li como filho da Ol.
      newLi.innerText = textInput.value; // transferi o valor do input em um novo item da lista.
      textInput.value = ""; // limpa input depois da adição.
    }
    else
      alert ("É precisa digitar uma Tarefa ^^"); // caso o input estiver fazio, irá dar esse alert.
  }

  buttonInputTesk.addEventListener("click", addTask); // interação para adicionar a tesk na lista.via button.


  // deixando fundo cinza 
  let allTegsLi = document.getElementsByTagName ("li");

  function setGreyColor(eventColorGrey) {
    let liEventSelected = eventColorGrey.target; // adicionando target na li para criar evento
    // for in passeado em: https://www.w3schools.com/jsref/jsref_forin.asp
    for (i in allTegsLi) {
      if (liEventSelected === allTegsLi[i] && !(liEventSelected.classList.contains("liSelected"))) {
        allTegsLi[i].classList.add("liSelected");
      }
      else if (liEventSelected === allTegsLi[i] && liEventSelected.classList.contains("liSelected")) {
        allTegsLi[i].classList.remove("liSelected");
      }
    }
  }

  itensOl.addEventListener("click", setGreyColor);
}