let buttonList = document.getElementById('criar-tarefa');
let inputList = document.getElementById('texto-tarefa');
let paiLista = document.getElementById('lista-tarefas');
let paintingList = document.getElementsByClassName('liCriada');

function createList() {
  if (inputList.value === "") {
    return null
  }
  let listaSon = document.createElement('li');
  listaSon.innerHTML = inputList.value;
  listaSon.className = 'liCriada';
  paiLista.appendChild(listaSon);
  inputList.value = '';
} 
  buttonList.addEventListener('click', createList);

const changeListColor = () => {
  let paintedList = document.getElementsByClassName('painted')
  for (let i = 0; i < paintingList.length; i += 1) {
    paintingList.classList.remove('painted');
    paintingList.target.className ='painted'
    paintedList[i].style.backgroundColor = rgb(128, 128, 128);
  }
}

paintingList.addEventListener('click', changeListColor)