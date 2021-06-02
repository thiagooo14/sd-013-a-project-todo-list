window.onload = () =>{
  let buttonAddTask = document.getElementById("criar-tarefa");
  let inputText = document.getElementById('texto-tarefa');
  let list = document.getElementById('lista-tarefas');

  buttonAddTask.addEventListener('click', addTask);

  function addTask(text){
    text = inputText;
    let li = document.createElement('li');
    li.innerText = inputText.value;
    list.appendChild(li);
    inputText.value = '';
}

}