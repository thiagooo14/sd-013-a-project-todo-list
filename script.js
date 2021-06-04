
const elementList = document.createElement('li')

function addTask(evento){
  const elementText = document.getElementById('texto-tarefa').value 
  const list = document.getElementById('lista-tarefas')
  const elementList = document.createElement('li')
  elementList.innerHTML = elementText
  list.appendChild(elementList)
  elementList.addEventListener('dblclick', finished)
}


function finished(evento) {
  const selected = evento.target
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}
