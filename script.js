
const lista = document.querySelector("#lista-tarefas");
const butao = document.querySelector("#criar-tarefa");


function adicionaItem(){

  const inputTexto = document.querySelector("#texto-tarefa");

  let itemLista = document.createElement("li");
      itemLista.innerText = inputTexto.value;
      itemLista.className="lista";
      lista.appendChild(itemLista);
      itemLista.addEventListener("click",selection);
      itemLista.addEventListener("dblclick",completed);
      inputTexto.value ="";

}

butao.addEventListener("click", adicionaItem);

function selection(event){
  itemDaLista = document.querySelectorAll(".lista");
  for(let index=0; index < itemDaLista.length;index +=1){
    if(itemDaLista[index]=== event.target){
      event.target.classList.add('selected');
    }
    else{
      itemDaLista[index].classList.remove("selected");
    }
  }
}

function completed(event){

  itemDaLista = document.querySelectorAll(".lista");
  for(let index=0; index < itemDaLista.length;index +=1){
    if(itemDaLista[index]=== event.target){
      event.target.classList.add('completed');
    }
  }
}