let buttonList = document.getElementById('criar-tarefa');
let inputList = document.getElementById('texto-tarefa');
let paiLista = document.getElementById('lista-tarefas');

function createList() {
  if (inputList.value === "") {
    return null
  }
  let listaSon = document.createElement('li');
  listaSon.innerHTML = inputList.value;
  listaSon.classList.add('liCriada')
  paiLista.appendChild(listaSon);
  inputList.value = '';
} 
  buttonList.addEventListener('click', createList);

const changeListColor = () => {
  const getLi = document.getElementsByTagName('li');
  const paiLi = document.querySelector('ol');
  paiLi.addEventListener('click' , (color) => {
    for (let i = 0; i < getLi.length; i += 1) {
      const lista = getLi[i];
      lista.style.backgroundColor = "";
    }
    color.target.style.backgroundColor = "rgb(128, 128, 128)"
  })
}
changeListColor();

const riskTask = () => {
  const getLi = document.getElementsByTagName('li');
  const paiLi = document.querySelector('ol');
  paiLi.addEventListener('dblclick', (line) => {
    if (line.target.classList.contains('completed')) {
      line.target.classList.remove('completed');
    } else {
      line.target.classList.add('completed');
    }
  })
}
riskTask();

const deleteLis = () => {
  const apagador = document.getElementById('apaga-tudo');
  const paiLi = document.querySelector('ol');
    apagador.addEventListener('click', () => {
      paiLi.innerHTML = null;
    })
}
deleteLis();

const deleteComp = () => {
  const apagador = document.getElementById('remover-finalizados');
  const paiLista = document.querySelector('ol');
  apagador.addEventListener('click', () => {
    const lista = document.querySelectorAll('.completed')
    for (let i = 0; i < lista.length; i += 1) {
      paiLista.removeChild(lista[i]);
    }
    
  })
}
deleteComp();

// const savePage = () => {
//   const getSaveButton = document.querySelector('salvar-tarefas');

//   getSaveButton.addEventListener('click', () => {
//     const getList = document.querySelector('#lista-tarefas');
//     localStorage.setItem('tasks', getList.innerHTML);
//     })
// }
// savePage();

// window.onload = () => {
//   const getList = document.querySelector('#lista-tarefas');

//   if(localStorage.getItem('tasks') !=   null) {
//     getList.innerHTML += localStorage.getItem('task')
//   }
// }

const upButton = () => {
  const getUppButton = document.querySelector('mover-cima');
}