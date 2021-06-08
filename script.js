let button = document.querySelector('#criar-tarefa');
button.addEventListener("click",addText);

function addText() {
  let textTarefa = document.getElementById('texto-tarefa').value;
  let list  = document.getElementById('lista-tarefas').innerHTML;
  list = list +"<li>"+textTarefa+"</li>";


  document.getElementById("lista-tarefas").innerHTML = list;
  document.getElementById('texto-tarefa').value = '';
}

//Desenvolvido com a ajuda do estudante Trybe Felipe Neves;
//Alterar cor de fundo
const listDesk = document.querySelector('#lista-tarefas');
  listDesk.addEventListener('click', addColor);
  function addColor(event){
    const item = document.getElementsByTagName('li');
    for (let index = 0; index < item.length; index += 1) {
     item[index].classList.remove('gray');
    }
    event.target.classList.add('gray');
  };
// Clicar duas vezes em um item, faz com que ele seja riscado, 
  listDesk.addEventListener('dblclick', addRisk);
  function addRisk(event){
    const item = document.getElementsByTagName('li');
    event.target.classList.toggle('completed')
  }

// Remover todas tarefa
let buttonRemove = document.getElementById('apaga-tudo')
buttonRemove.addEventListener('click', removeAll);
function removeAll() {
const listDesk = document.querySelector('#lista-tarefas');
while (listDesk.firstChild) {
listDesk.removeChild(listDesk.firstChild);
}
}

//Remover finalizados
let buttonRemoveFin = document.getElementById('remover-finalizados');
buttonRemoveFin.addEventListener('click',removeFinalizados);
function removeFinalizados(){
const risk = document.querySelectorAll(".completed");;
const listDesk = document.getElementById('lista-tarefas');
  for (let index = 0; index < risk.length; index += 1) {
      listDesk.removeChild(risk[index]);
    }
  }

