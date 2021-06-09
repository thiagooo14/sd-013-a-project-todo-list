window.onload = function(){

// declarando variaveis..
  const textInput = document.getElementById("texto-tarefa");
  const buttonInputTesk = document.getElementById("criar-tarefa");
  const itensOl = document.getElementById("lista-tarefas");

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

  function checkSelectGray() {
    let selectedLi = document.querySelector('.liSelected');

    if (selectedLi !== null) {
      selectedLi.classList.remove('liSelected');
    }
  }

  function setGrayColor(eventColorGray) {

    let liEventSelected = eventColorGray.target; // adicionando target na li para criar evento
    for (let i = 0; i < allTegsLi.length; i += 1) {
      // método contains -> http://www.w3schools.com/java/ref_string_contains.asps
      if (liEventSelected === allTegsLi[i] && !(liEventSelected.classList.contains("liSelected"))) {
        checkSelectGray();
        allTegsLi[i].className = "liSelected";
      }
      else if (liEventSelected === allTegsLi[i] && liEventSelected.classList.contains("liSelected")) {
        allTegsLi[i].className = "";
      }
    }
  }

  itensOl.addEventListener("click", setGrayColor);
}