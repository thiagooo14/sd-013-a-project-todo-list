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
}
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
}
setInputEnter();

// const selectTask = () =>{
//   const getTasks = document.getElementsByTagName('li');
//   const ol = document.querySelector('ol')
//   ol.addEventListener('click', (event) => {
//     for (let i = 0; i < getTasks.length; i++){
//       const li = getTasks[i]
//       li.style.backgroundColor = '';
//     }
//     event.target.style.backgroundColor = 'rgb(128, 128, 128)'
//   })

// }

const selectTask = () => {
  const getTaskList = document.querySelector('#lista-tarefas');
  const getTasks = document.getElementsByClassName("task-list");

  getTaskList.addEventListener("click", (event) => {
    for(let i = 0; i < getTasks.length; i += 1) {
      getTasks[i].classList.remove("selected");
    }
    event.target.classList.add("selected");
  })

}
selectTask();

const completeTask = () => {
  const ol = document.querySelector('ol')
  ol.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')){
      event.target.classList.remove('completed')
    }else{
      event.target.classList.add('completed');
    }
  })
}

completeTask();

const deleteTask = () => {
  const apagar = document.getElementById('apaga-tudo');
  const ol = document.querySelector('ol');
  apagar.addEventListener('click',() =>{
    ol.innerHTML = null;
  })
}
deleteTask();

const finalDelete = () =>{
  const getRemoveButton = document.getElementById('remover-finalizados');
  getRemoveButton.addEventListener('click',() =>{
    const completedTask = document.querySelectorAll('.completed');
    const taskList = document.querySelector('#lista-tarefas');
    for(let i=0; i<completedTask.length;i++){ // i = i + 1 ; i += 1
      taskList.removeChild(completedTask[i]);
    }
  })
}
finalDelete();

const saveTasks = () => {
  const getSaveButton = document.querySelector("#salvar-tarefas");
  const getListTask = document.querySelector("#lista-tarefas");

  getSaveButton.addEventListener("click", () => {
    localStorage.setItem("tasks", getListTask.innerHTML);
  });
}
saveTasks();

window.onload = () => {
  const getListTask = document.querySelector("#lista-tarefas");

  if(localStorage.getItem("tasks") !== null) {
    getListTask.innerHTML += localStorage.getItem("tasks");
    //getListTask.innerHTML = getListTask.innerHTML + localStorage.getItem("tasks");
  }
}

const getUpButton = document.querySelector("#mover-cima");
const getDownButton = document.querySelector("#mover-baixo");
const getRemoveSelectButton = document.querySelector("#remover-selecionado");

const upButton = () => {
  const getSelectedTask = document.querySelector(".selected");
  const getList = document.querySelector("#lista-tarefas");
  const getTasks = document.querySelectorAll(".task-list")

  if(getSelectedTask !== null && getSelectedTask !== getTasks[0]) {
    getList.insertBefore(getSelectedTask, getSelectedTask.previousSibling);
  }
}

getUpButton.addEventListener("click", upButton);

const downButton= () => {
  const getSelectedTask = document.querySelector(".selected");
  const getList = document.querySelector("#lista-tarefas");
  const getTasks = document.querySelectorAll(".task-list")

  if(getSelectedTask !== null && getSelectedTask !== getTasks[getTasks.lenght - 1]) {
    getList.insertBefore(getSelectedTask.nextElementSibling, getSelectedTask);
  }
}

getDownButton.addEventListener("click", downButton);

getRemoveSelectButton.addEventListener("click", () => {
  const getSelectedTask = document.querySelector(".selected");

  getSelectedTask.remove();
});
