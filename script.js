window.onload = function() { 

    function taskList() {
        const contentTask = document.getElementById('texto-tarefa');
        const contentList = document.getElementById('lista-tarefas');
        const listItem = document.createElement('li');
        if (contentTask.length === 0) {
            alert('Não Preenchido')
            return false
        }else {
            listItem.textContent = contentTask.value;
            contentList.appendChild(listItem);
        }
    }

    function clickSelect() {
        const clickButton = document.getElementById('criar-tarefa');
        clickButton.addEventListener('click', taskList);
        console.log('oiiiiie');
    }
    clickSelect();

}