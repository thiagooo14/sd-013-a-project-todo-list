// Requisito 5 e 6

const selectButton = document.getElementById('criar-tarefa'); // caminho do botão

selectButton.addEventListener('click', () => { // onde será aplicado o evento de click
  const createTask = document.getElementById('texto-tarefa'); // através do caminho de onde está o input
  const valueInput = document.getElementById('texto-tarefa').value; // resgatamos o que foi digitado pelo usuário
  const li = document.createElement('li'); // cada input vai criar uma li
  const ol = document.querySelector('#lista-tarefas'); // que vai ficar dentro da nossa ol
  li.innerHTML = valueInput; // vamos injetar o input dentro da li
  ol.appendChild(li); // e injetar a li dentro da ol
  li.classList.add('item');// Adicionar classe para as lis
  createTask.value = ''; // e depois limpar tudo
});

// Requisito 7
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

// Requisito 8
function oneTaskSelected() {
  const getOl = document.getElementById('lista-tarefas');
  getOl.addEventListener('click', (event) => {
    if (event.target.classList.contains('item')) {
      const getLi = document.getElementsByClassName('item');
      for (let index = 0; index < getLi.length; index += 1) {
        getLi[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
}
oneTaskSelected();

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

// Requisito 10
function removeItem() { // criar uma função
  const getButtomRemoveAll = document.querySelector('#apaga-tudo'); // no botão de id apaga-tudo
  getButtomRemoveAll.addEventListener('click', () => { // adicionar um evento no botão
    const getOl = document.querySelector('ol'); // acessar a ol
    getOl.innerHTML = ''; // e esvaziar o que tiver dentro
  });
 }
 removeItem();

// Requisito 11
function removeTasksCompleted() { // criar uma função
  const getButtomRemoveCompleted = document.querySelector('#remover-finalizados'); // acessar o botão que foi criado
  getButtomRemoveCompleted.addEventListener('click', () => { // criar o evento de click do botão
    const getLiClass = document.querySelectorAll('.item'); // RECUPERAR TODAS AS LIS PELA CLASSE DELAS
    for (let index = 0; index < getLiClass.length; index += 1) { // e para percorrer cada um dos elementos dentro da ol
      if (getLiClass[index].classList.contains('completed')) {
        document.querySelector('ol').removeChild(getLiClass[index]);
      }
    }
  });
}
removeTasksCompleted();
