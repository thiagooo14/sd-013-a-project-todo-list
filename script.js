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

  selectTask();
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
  selectTask();
});

function selectTask() {
  const getTask = document.querySelectorAll(".task-list");

  for(let i = 0; i < getTask.length; i += 1) {
    getTask[i].addEventListener("click", function() {
      for(let j = 0; j < getTask.length; j += 1) {
        getTask[j].classList.remove("selected");
        getTask[j].style.backgroundColor = "white";
      }
      getTask[i].classList.add("selected");
      getTask[i].style.backgroundColor = "rgb(128, 128, 128)";
    });
  }
}