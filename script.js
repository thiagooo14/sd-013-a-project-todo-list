
const lista = document.querySelector("#lista-tarefas");
const botao1 = document.querySelector("#criar-tarefa");
const botao2 = document.querySelector("#apaga-tudo");
const botao3 = document.querySelector("#remover-finalizados");
const botao4 = document.querySelector("#salvar-tarefas");
const botao5 = document.querySelector("#mover-cima");
const botao6 = document.querySelector("#mover-baixo");
const botao7 = document.querySelector("#remover-selecionado");


function adicionaItem(){

  const inputTexto = document.querySelector("#texto-tarefa");

      if(inputTexto.value ===""){
        alert("Texto inválido!!");
        return;
      }

  let itemLista = document.createElement("li");
      itemLista.innerText = inputTexto.value;
      itemLista.className="lista";
      lista.appendChild(itemLista);
      itemLista.addEventListener("click",selection);
      itemLista.addEventListener("dblclick",completed);
      inputTexto.value ="";
      inputTexto.focus(); // faz o cursor voltar pra caixa de dígito
     

}

botao1.addEventListener("click", adicionaItem);

function selection(event){
  itemDaLista = document.querySelectorAll(".lista");
  for(let index=0; index < itemDaLista.length; index +=1){
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
      event.target.classList.toggle('completed');
    }
  }
}

function apagaTudo(){

  let ol = document.querySelector("ol");
  itemDaLista = document.querySelectorAll(".lista");
  ol.remove(itemDaLista);

/*   for(let index = 0 ; index < itemDaLista.length; index +=1){
    if(itemDaLista.length !== 0 ){
      lista.removeChild(lista.firstChild);
    }  
  }   */
}

botao2.addEventListener("click", apagaTudo);

function removeCompleto(){
  let listaCompletos = document.querySelectorAll(".completed");
  let paiCompletos = document.querySelector("#lista-tarefas");


  for(let index =0; index < listaCompletos.length; index+=1){ 
    paiCompletos.removeChild(listaCompletos[index]); 
  }
}

botao3.addEventListener("click", removeCompleto);

function addStorage(){

  const htmlList = lista.innerHTML;
  localStorage.setItem("listaSalva" , htmlList);

}

function recuperaStorage(){

  let itemStorage = localStorage.getItem("listaSalva");
  lista.innerHTML = itemStorage;
  

}

botao4.addEventListener("click", addStorage);
recuperaStorage();




function removerSelecionado(){
  let itemSelecionado = document.querySelector(".selected");
  lista.removeChild(itemSelecionado);
}

botao7.addEventListener("click", removerSelecionado);



// referência https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore e ajuda da sala de dúvidas.
//insertBefore(); -> elementopai.insertBefore(novoElemento. elementoPosteior);
function moverCima(){

  let itemSelecionado = document.querySelector(".selected");
  if(itemSelecionado !== null){
    let elementoCima = itemSelecionado.previousElementSibling;
    if(itemSelecionado !== lista.firstChild){
      lista.insertBefore(itemSelecionado, elementoCima);
    }
  }

}

botao5.addEventListener("click",moverCima);

function moverBaixo(){

  let itemSelecionado = document.querySelector(".selected");
  if(itemSelecionado !== null){
    let elementoBaixo = itemSelecionado.nextElementSibling;
    if(itemSelecionado !== lista.lastChild){
      lista.insertBefore(itemSelecionado,elementoBaixo.nextElementSibling);
    }
  }

}

botao6.addEventListener("click",moverBaixo);