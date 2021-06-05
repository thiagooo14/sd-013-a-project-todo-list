// Requisito 5 e 6

const selectButton = document.getElementById('criar-tarefa');

selectButton.addEventListener('click', () => {
  const createTask = document.getElementById('texto-tarefa');
  const valueInput = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  const ol = document.querySelector('#lista-tarefas');
  li.innerHTML = valueInput;
  ol.appendChild(li);
  createTask.value = '';
});

// Requisito 7 e 8
// Desenvolvido com a ajuda do estudante Trybe Thiago Carboneri
function selectedClass() { // criar uma função
  const getOl = document.querySelector('ol'); // que dê o caminho de onde faremos o evento
  getOl.addEventListener('click', (event) => { // criar o evento de click
    const getLi = document.getElementsByTagName('li'); // que vai ser executado dentro das lis, portanto o caminho delas
    for (let index = 0; index < getLi.length; index += 1) { // e para percorrer cada uma dessas lis
      getLi[index].classList.toggle('selected'); // onde removeremos a classe selected caso ela já exista e caso ela não exista vamos criá-la usando o toggle
    }
  });
}

selectedClass();

// Requisito 9
function selectedClassDoubleClick() { // criar uma função
  const getOl = document.querySelector('ol'); // que dê o caminho de onde faremos o evento
  getOl.addEventListener('dblclick', (event) => { // criar o evento de click
    const getLi = document.getElementsByTagName('li'); // que vai ser executado dentro das lis, portanto o caminho delas
    for (let index = 0; index < getLi.length; index += 1) { // e para percorrer cada uma dessas lis
      getLi[index].classList.toggle('completed'); // onde removeremos a classe completed caso ela já exista e caso ela não exista vamos criá-la usando o toggle
    }
  });
}

selectedClassDoubleClick();