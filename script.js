const setInput = () => {
  const lista = document.querySelector('#lista-tarefas');
  const botton = document.querySelector('#criar-tarefa');
  const inputList = document.querySelector('#texto-tarefa');

  botton.addEventListener('click', () => {
    const setTask = document.createElement('li');
    setTask.classList.add('task-list');
    const taskContent = inputList.value;
    setTask.innerText = taskContent;
    lista.appendChild(setTask);

    inputList.value = '';
  });
};
setInput();

const setInputEnter = () => {
  const lista = document.querySelector('#lista-tarefas');
  const inputList = document.querySelector('#texto-tarefa');

  inputList.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && inputList.value.length > 0) {
      const setTask = document.createElement('li');
      setTask.classList.add('task-list');
      const taskContent = inputList.value;
      setTask.innerText = taskContent;
      lista.appendChild(setTask);

      inputList.value = '';
    }
  });
};
setInputEnter();
