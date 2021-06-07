const btnAdd = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa')

btnAdd.addEventListener('click', function(){
  const addList = document.createElement('li');
  addList.innerText = inputText.value;
  lista.appendChild(addList);
  inputText.value = "";
})
