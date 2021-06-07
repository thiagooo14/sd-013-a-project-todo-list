const btnAdd = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa')

btnAdd.addEventListener('click', function(){
  const itemList = document.createElement('li');
  itemList.innerText = inputText.value;
  lista.appendChild(itemList);
  inputText.value = "";

  itemList.addEventListener('click', function(){
    itemList.style.backgroundColor = 'rgb(128,128,128)';
  })

  itemList.addEventListener('dblclick', function(){
    itemList.style.textDecoration = "line-through";
  })
})
