//Input container

const getInputButton = document.querySelector("#criar-tarefa");
const getInputLabel = document.querySelector("#texto-tarefa");

const setInput = (event) => {
  event.preventDefault();

  const getInputList = document.querySelector("#lista-tarefas");
  const setTask = document.createElement("li");
  const taskContent = `<p class=task>${getInputLabel.value}</p>`;

  setTask.classList.add("task-list");
  setTask.innerHTML = taskContent;
  getInputList.appendChild(setTask);

  getInputLabel.value = "";

  return setTask;
}

getInputButton.addEventListener("click", setInput);
getInputLabel.addEventListener("keyup", function(event) {
  event.preventDefault();
  if(event.keyCode === 13 && getInputLabel.value.length > 0) {
    const getInputList = document.querySelector("#lista-tarefas");
    const setTask = document.createElement("li");
    const taskContent = `<p class=task>${getInputLabel.value}</p>`;

    setTask.classList.add("task-list");
    setTask.innerHTML = taskContent;
    getInputList.appendChild(setTask);

    getInputLabel.value = "";
  }
});

function selectTask() {
  let getTask = document.querySelectorAll(".task");

  for(let i = 0; i < getTask.length; i += 1) {
    getTask[i].addEventListener("click", function() {
      for(let j = 0; j < getTask.length; j += 1) {
        getTask.classList.remove("selected");
      }
      getTask.classList.add("selected");
    });
  }
}

function selectedTask() {
  const selectedTask = document.querySelector(".selected");

  selectedTask.style.backgroundColor = "rgb(128,128,128)";
}

function selectItems() {
  const getTask = document.querySelectorAll(".task");

  for(let i = 0; i < getTask.length; i += 1) {
    const task = getTask[i];
    task.addEventListener("click", selectedTask);
  }
}

selectTask();
selectItems();