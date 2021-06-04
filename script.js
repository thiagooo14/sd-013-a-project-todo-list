
function addTask(evento) {
  const elementText = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const elementList = document.createElement('li');
  elementList.innerHTML = elementText;
  list.appendChild(elementList);
  document.getElementById('texto-tarefa').value = '';
  elementList.addEventListener('dblclick', finished);
  elementList.addEventListener('click', changeSelectedColor);
}

function changeSelectedColor(evento) {
  let list = document.querySelectorAll("li")
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('selected')) {
      list[i].classList.remove('selected')
    }
    
  }
  evento.target.classList.add('selected')
   
  
}
function finished(evento) {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
    
  } else {
    evento.target.classList.add('completed');
    evento.target.classList.remove('selected');
  }
}
