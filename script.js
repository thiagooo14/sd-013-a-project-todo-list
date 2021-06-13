// Requisito 5 e 6

const selectButton = document.getElementById('criar-tarefa'); 

selectButton.addEventListener('click', () => { 
  const Task = document.getElementById('texto-tarefa'); 
  const InputValue = document.getElementById('texto-tarefa').value; 

  const li = document.createElement('li'); 
  const ol = document.querySelector('#lista-tarefas'); 

  li.innerHTML = InputValue; 
  ol.appendChild(li); 
  li.classList.add('item');
  Task.value = ''; 
});

// Requisito 7

function selectedClass() { 
    const createOL = document.querySelector('ol'); 
    createOL.addEventListener('click', (event) => { 
      const createLI = document.getElementsByTagName('li'); 
      for (let index = 0; index < createLI.length; index += 1) { 
        createLI[index].classList.toggle('selected'); 
      }
    });
}
selectedClass();

// Requisito 8
function oneTaskSelected() {
    const createOL = document.getElementById('lista-tarefas');
    createOL.addEventListener('click', (event) => {
      if (event.target.classList.contains('item')) {
        const createLI = document.getElementsByClassName('item');
        for (let index = 0; index < createLI.length; index += 1) {
          createLI[index].classList.remove('selected');
        }
        event.target.classList.add('selected');
      }
    });
}
oneTaskSelected();

// Requisito 9
function selectedClassDoubleClick() { 
    const getOl = document.querySelector('ol'); 
    getOl.addEventListener('dblclick', (event) => { 
      const getLi = document.getElementsByTagName('li'); 
      for (let index = 0; index < getLi.length; index += 1) { 
        event.target.classList.toggle('completed'); 
      }
    });
}
selectedClassDoubleClick();

// Requisito 10
function removeItem() {
    const buttomRemoveAll = document.querySelector('#apaga-tudo');
    buttomRemoveAll.addEventListener('click', () => {
      const getOl = document.querySelector('ol');
      getOl.innerHTML = '';
    });
   }
removeItem();