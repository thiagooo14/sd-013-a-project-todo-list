window.onload

/* Variaveis */
let inputAdd = document.getElementById("texto-tarefa");
let btnAdd = document.getElementById("criar-tarefa");
let listOrd = document.getElementById("lista-tarefas");
let item = document.getElementsByClassName("item");
/*criando itens apos clicar no botão adicionar*/



function criarItens () {
  btnAdd.addEventListener("click", () =>{
  let itens = document.createElement('li');
  listOrd.appendChild(itens);
  itens.classList = "item"
  itens.innerText = inputAdd.value
  inputAdd.value = ""
  listenerClick();
  })
}

criarItens();

 //Criando background ao clicar nos itens 

function listenerClick () {
  for (let i = 0 ; i < item.length; i++){
    item[i].addEventListener("click", () => {
      adicionaClass()});
    }
}

function adicionaClass (){
for (let i = 0 ; i < item.length; i++){
  item[i].style.backgroundColor= "rgb(128, 128, 128)"
  }
}
