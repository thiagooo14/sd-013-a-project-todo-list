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

function selectedClass() { // criar uma função
    const createOL = document.querySelector('ol'); 
    createOL.addEventListener('click', (event) => { 
      const createLI = document.getElementsByTagName('li'); 
      for (let index = 0; index < createLI.length; index += 1) { 
        createLI[index].classList.toggle('selected'); 
      }
    });
}
selectedClass();
