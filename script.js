const ol = document.querySelector('#lista-tarefas');

const requisito4 = () => {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');

  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.setAttribute('class', 'tarefa');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
  });
};

const requisito7 = () => {
  const liIrmaos = document.getElementsByTagName('li');

  ol.addEventListener('click', (event) => {
    for (let i = 0; i < liIrmaos.length; i += 1) {
      const li = liIrmaos[i];
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
  const saveButton = document.getElementById('salvar-tarefas');

  saveButton.addEventListener('click', () => {
    localStorage.setItem('lista', ol.innerHTML);
  });

  ol.innerHTML = localStorage.getItem('lista');
};

const requisito13 = () => {
  const cima = document.querySelector('#mover-cima');
  const baixo = document.querySelector('#mover-baixo');
  cima.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected !== null && selected.previousElementSibling !== null) {
      ol.insertBefore(selected, selected.previousSibling);
    }
  });
  baixo.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected !== null && selected.nextElementSibling !== null) {
      ol.insertBefore(selected.nextSibling, selected);
    }
  });
};

window.onload = () => {
  requisito4();
  requisito7();
  requisito10();
  requisito11();
  requisito14();
  requisito13();
  requisito12();
};
