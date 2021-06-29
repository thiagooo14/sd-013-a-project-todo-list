const requisito4 = () => {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');
  const ol = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.setAttribute('class', 'tarefa');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  });
};

const requisito7 = () => {
  const liS = document.getElementsByClassName('tarefa');
  const ol = document.getElementById('lista-tarefas');
  ol.addEventListener('click', (event) => {
    for (let i = 0; i < liS.length; i += 1) {
      const li = liS[i];
      li.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
  ol.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
};

const requisito10 = () => {
  const buttonErase = document.getElementById('apaga-tudo');
  const ol = document.getElementById('lista-tarefas');
  buttonErase.addEventListener('click', () => {
    ol.innerHTML = '';
  });
};

const requisito11 = () => {
  const buttonErase = document.getElementById('remover-finalizados');
  buttonErase.addEventListener('click', () => {
    const completeds = document.querySelectorAll('.completed');
    for (let i = 0; i < completeds.length; i += 1) {
      const completed = completeds[i];
      completed.remove();
    }
  });
};

const requisito14 = () => {
  const buttonErase = document.getElementById('remover-selecionado');
  buttonErase.addEventListener('click', () => {
    const selecteds = document.querySelectorAll('.selected');
    for (let i = 0; i < selecteds.length; i += 1) {
      const selected = selecteds[i];
      selected.remove();
    }
  });
};

const requisito12 = () => {
  const ol = document.getElementById('lista-tarefas');
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    localStorage.setItem('lista', ol.innerHTML);
  });
  if (localStorage.getItem('lista') !== null) {
    ol.innerHTML = localStorage.getItem('lista');
  }
};

window.onload = () => {
  requisito4();
  requisito7();
  requisito10();
  requisito11();
  requisito14();
  requisito12();
};

// const btnCriarTarefa = document.querySelector('#criar-tarefa');
// const inputCriarTarefa = document.querySelector('#texto-tarefa');
// const olTarefa = document.querySelector('#lista-tarefas');
// const btnApagarTudo = document.querySelector('#apaga-tudo');
// const btnRemoverFinalizados = document.querySelector('#remover-finalizados');

// btnCriarTarefa.addEventListener('click', function() {
//   let liTarefa = document.createElement('li');
//   olTarefa.appendChild(liTarefa);
//   liTarefa.classList.add('li-style')

//   liTarefa.innerHTML = inputCriarTarefa.value;
//   inputCriarTarefa.value = '';
// });

// olTarefa.addEventListener('click', function(event) {
//   const liIrmaos = olTarefa.childNodes;

//   for (const i of liIrmaos) {
//     i.classList.remove('select');
//   }

//   event.target.classList.add('select');
// });

// olTarefa.addEventListener('dblclick', function(event) {
//     event.target.classList.toggle('completed');
// });

// btnApagarTudo.addEventListener('click', function(){
//   olTarefa.innerHTML = '';
// });

// btnRemoverFinalizados.addEventListener('click', function(){
//   const liIrmaos = document.querySelectorAll('.li-style');

//   for (const i of liIrmaos) {
//     if (i.classList.contains('completed') === true) {
//         i.remove()
//     }
//   }
// });
