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
    for (let i = 0; i < liS.length; i += 1) {
      const li = liS[i];
    }
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
    const ol = document.getElementById('lista-tarefas');
    for (let i = 0; i < completeds.length; i += 1) {
      let completed = completeds[i];
      completed.remove();
    }
  });
};

const requisito12 = () => {
  const buttonErase = document.getElementById('remover-selecionado');
  buttonErase.addEventListener('click', () => {
    const selecteds = document.querySelectorAll('.selected');
    const ol = document.getElementById('lista-tarefas');
    for (let i = 0; i < selecteds.length; i += 1) {
      let selected = selecteds[i];
      selected.remove();
    }
  });
};

window.onload = () => {
  requisito4();
  requisito7();
  requisito10();
  requisito11();
  requisito12();
};
