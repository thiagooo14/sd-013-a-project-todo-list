const btnInput = document.getElementById('criar-tarefa'); // botão de add tarefa
const btnClear = document.getElementById('apaga-tudo'); // botão de apagar
const taskText = document.getElementById('texto-tarefa'); // input com o texto da tarefa
// const taskList = document.getElementById('lista-tarefas'); // ol 
// const taskList = document.querySelector('ol');

btnInput.addEventListener('click', () => {
  const taskList = document.querySelector('ol');
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText.value;
  taskList.appendChild(taskItem);
  taskText.value = '';
});

function selectElement() {
  const taskList = document.querySelector('ol');
  const listItens = document.getElementsByTagName('li');
  taskList.addEventListener('click', (event) => {
    for (let index = 0; index < listItens.length; index += 1) {
      listItens[index].classList.remove('select');
    }
    event.target.classList.add('select');
  });
}

selectElement();

// Erro npm test 9.2 > remover a classe 'completed'
function completedList() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('dblclick', (event) => {
    const listItens = document.getElementsByTagName('li');
    for (let index = 0; index < listItens.length; index += 1) {
      event.target.classList.toggle('completed');
    }
  });
}

completedList();

function clearAll() {
  btnClear.addEventListener('click', () => {
    const taskList = document.querySelector('ol');
    taskList.innerHTML = '';
  });
}

clearAll();

/* btnInput.onclick = () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText.value;
  taskList.appendChild(taskItem);
  const listItem = document.getElementsByTagName('li');
  for (let index = 0; index < listItem.length; index++) {
    listItem[index].addEventListener('click', () => {
      for (let j = 0; j < listItem.length; j += 1) {
        if ((listItem[j].className === 'select') || (listItem[j].className === 'completed select')) {
        listItem[j].classList.remove('select');
        }
      };
      listItem[index].classList.add('select');
      listItem[index].addEventListener('dblclick', () => {
        if (listItem[index].className === 'select') {
          listItem[index].classList.add('completed');
          listItem[index].classList.remove('select');
        } else if (listItem[index].className === 'completed select') {
          listItem[index].classList.remove('completed');
          listItem[index].classList.remove('select');
        }
      });
    });
  }
  taskText.value = '';

};
 */

