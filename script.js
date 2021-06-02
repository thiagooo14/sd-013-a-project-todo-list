// Botão que adiciona uma 'li' na 'ol' com o valor dado no input
function addTask() {
  const input = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');
  const lista = document.getElementById('lista-tarefas');
  
  function add() {
    const inputvalue = input.value;
    const newItem = document.createElement('li');
    newItem.innerText = inputvalue;

    lista.appendChild(newItem);
    input.value = '';
  }

  button.addEventListener('click', add);
  input.addEventListener('keydown', (event) => {
    let key = event.code;
    if (key === 'Enter' || key === 'NumpadEnter') {
      add ();
    }
  });
}
addTask();