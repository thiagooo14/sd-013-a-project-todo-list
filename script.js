const buttonTask = document.querySelector('#criar-tarefa');
buttonTask.addEventListener('click', function() {
  input = document.querySelector('#texto-tarefa');
  const textValue = input.value;
  const createList = document.createElement('li');
  createList.innerText = textValue;
  createList.className = 'task'
  const olList = document.querySelector("#lista-tarefas");
  olList.appendChild(createList);
  input.value = '';
}); 
const li = document.getElementsByClassName("task");
const olList = document.querySelector("ol");
function deleteTask() {
    olList.addEventListener("click", (event)=> {
    for (let index = 0; index < li.length; index += 1) {
        li[index].classList.remove("selected");
    };
    event.target.classList.add("selected");
});
}
deleteTask();