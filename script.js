window.onload

/* Variaveis */
let inputAdd = document.getElementById("texto-tarefa");
let btnAdd = document.getElementById("criar-tarefa");
let listOrd = document.getElementById("lista-tarefas");
let item = document.getElementsByClassName("item");
let btnlimpar = document.getElementById("apaga-tudo")



/*criando itens apos clicar no botão adicionar*/



function criarItens() {
  btnAdd.addEventListener("click", () => {
    let itens = document.createElement('li');
    listOrd.appendChild(itens);
    itens.classList = "item"
    itens.innerText = inputAdd.value
    inputAdd.value = ""
    listenerClick();
    dblclick()
  })
}

criarItens();

//Criando selected e background ao clicar nos itens 

function listenerClick() {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
      removeSelected()
      item[i].classList.add("selected")
      adicionaselected()
    });
  }
}

function adicionaselected() {
  for (let i = 0; i < item.length; i++) {
    if (item[i].classList.contains("selected")) {
      item[i].style.backgroundColor = "rgb(128, 128, 128)"
    }
  }
}

function removeSelected() {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove("selected")
    item[i].style.backgroundColor = "white"
  }
}

// Adicionando função para o double click
function dblclick() {
  let itList = document.querySelectorAll(".item")
  for (let i = 0; i < itList.length; i++) {
    itList[i].addEventListener("dblclick", completed)
  }

}

function completed(e) {
  if (e.target.classList.contains("completed")) {
    e.target.classList.remove("completed")
  } else {
    e.target.classList.add("completed")
  }
}

// funcao botão que limpa tudo

function clearList() {
  btnlimpar.addEventListener("click", () => {
    listOrd.innerHTML = "";
  });
}

clearList()

