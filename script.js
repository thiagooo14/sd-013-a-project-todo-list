const buttomNewTask = document.getElementById('criar-tarefa');
buttomNewTask.addEventListener('click', () => {
  let newTask = document.getElementById('texto-tarefa');
  let texto = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  let ol = document.querySelector('ol');
  li.innerHTML = texto;
  ol.appendChild(li);
  li.classList.add('tarefa');
  newTask.value = '';  
});

function backgroundGray() {
  const listaDeTarefas = document.getElementById('lista-tarefas');
  console.log(listaDeTarefas);
  listaDeTarefas.addEventListener('click', (e) => {
    if (e.target.classList.contains('tarefa')){
    const listaLis = document.getElementsByClassName('tarefa');    
    for (let i = 0; i < listaLis.length; i += 1){
        listaLis[i].classList.remove('backgroundColorGray');
      } 
      e.target.classList.add('backgroundColorGray');
    }
  });
}

backgroundGray();
