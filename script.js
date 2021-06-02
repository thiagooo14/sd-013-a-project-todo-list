let buttomNewTask = document.getElementById('criar-tarefa');

buttomNewTask.addEventListener('click', () => {
  let newTask = document.getElementById('texto-tarefa');
  let texto = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  let ol = document.querySelector('ol');
  li.innerHTML = texto;
  ol.appendChild(li);
  newTask.value = '';  
})



