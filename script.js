//cria titulo
let titulo = document.createElement('h1');

titulo.innerHTML = 'Minha Lista de Tarefas';

let getHeader = document.createElement('header');//cria header

getHeader.appendChild(titulo)

//===========
//cria paragrafo
let paragraph = document.createElement('p');

paragraph.setAttribute('id', 'funcionamento');
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
getHeader.appendChild(paragraph)

//==============
//cria input
let input = document.createElement('input');
input.id = 'texto-tarefa';
getHeader.appendChild(input);

//==========
//cria button 
let getButton = document.createElement('button');
getButton.id = 'criar-tarefa';
getButton.innerHTML = 'Criar tarefa'
getHeader.appendChild(getButton)

//============
//cria ol 
let getOl = document.createElement('ol');
getOl.id = 'lista-tarefas';
getHeader.appendChild(getOl);

//=======
//Cria button para limpar tudo
let buttoClean = document.createElement('button');
buttoClean.id = 'apaga-tudo';
buttoClean.innerHTML = 'Apagar Tudo';
getHeader.appendChild(buttoClean);
//=======

let buttoFinalizado = document.createElement('button');
buttoFinalizado.id = 'remover-finalizados';
buttoFinalizado.innerHTML = 'Remover Item Finalizado';
getHeader.appendChild(buttoFinalizado);

document.body.appendChild(getHeader);
//adiciona o header
//=================

function adicionaLi () {
  let getO =document.querySelector('button');

  getO.addEventListener('click', () => {
    let li = document.createElement('li');
    let getOl1 = document.querySelector('ol');
    let getInput =document.querySelector('input');
    li.innerHTML = getInput.value;
    getInput.value = '';
    getOl1.appendChild(li);

   
  })
}
adicionaLi();
//let vert = adicionaLi();
function mudarBackground () {
  let getLis = document.querySelector('ol');

  getLis.addEventListener('click', (event) => {
    if(event.target.classList.contains('cinza') == false){
    event.target.classList.add('cinza');
  }else{
    event.target.classList.remove('cinza');
  }
  })
    
}
mudarBackground();


function addLine () {
  let getLis = document.querySelector('ol');

  getLis.addEventListener('dblclick', (event) => {
   
    event.target.classList.toggle('completed');
  })
}
addLine();


function clearAll () {
  let getClear = document.getElementById('apaga-tudo');

  getClear.addEventListener('click', (event) => {
    let getOl = document.getElementsByTagName('ol')[0];
    getOl.innerHTML = '';
  })
}
clearAll();

function clearFinalized () {
  let getFinalizado = document.getElementById('remover-finalizados');

  getFinalizado.addEventListener('click', (event) => {
    let getOl = document.getElementsByTagName('ol')[0];
    let clasS = document.querySelectorAll('.completed');//li
    
    clasS.forEach(element => {
      getOl.removeChild(element);
    });
  })
}
clearFinalized ();