window.onload = function() {

    function taskList() {
        const contentTask = document.getElementById('texto-tarefa');
        const contentList = document.getElementById('lista-tarefas');
        const listItem = document.createElement('li');
        if (contentTask.length === 0) {
           alert('Campo não preenchido');
           return false;
        }else {
          listItem.textContent = contentTask.value;
           contentList.appendChild(listItem);
        }
     }
     function clickSelect() {
         const clickBoton = document.getElementById('criar-tarefa');
         clickBoton.addEventListener('click', taskList); 
     }
     clickSelect();
}