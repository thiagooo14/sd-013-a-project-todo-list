let button = document.querySelector('#criar-tarefa');
button.addEventListener("click",addText);

function addText() {
  let textTarefa = document.getElementById('texto-tarefa').value;
  let list  = document.getElementById('lista-tarefas').innerHTML;
  list = list +"<li>"+textTarefa+"</li>";
  
  
  document.getElementById("lista-tarefas").innerHTML = list;
  document.getElementById('texto-tarefa').value = '';
}

// Desenvolvido com a ajuda do estudante Trybe Thiago Carboneri
function selectedClass() {
const getOl = document.querySelector('#lista-tarefas');
  getOl.addEventListener('click', addColor);
  function addColor(event){
    const getLi = document.getElementsByTagName('li');
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  };
}
selectedClass();