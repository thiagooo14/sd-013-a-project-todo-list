// Requisito 5 e 6

const selectButton = document.getElementById('criar-tarefa'); 

selectButton.addEventListener('click', () => { 
  const Task = document.getElementById('texto-tarefa'); 
  const InputValue = document.getElementById('texto-tarefa').value; 

  const li = document.createElement('li'); 
  const ol = document.querySelector('#lista-tarefas'); 

  li.innerHTML = InputValue; 
  ol.appendChild(li); 
  li.classList.add('item');
  Task.value = ''; 
});
