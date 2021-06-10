window.onload = function() { 

    function taskList() {
        const contentTask = document.getElementById('texto-tarefa');
        const contentList = document.getElementById('lista-tarefas');
        const listItem = document.createElement('li');
        if (contentTask.value === '' || contentTask.value.indexOf(' ') === 0) {
            alert('Não Preenchido');
            contentTask.focus();
        }else {
            listItem.textContent = contentTask.value;
            contentList.appendChild(listItem);
            contentTask.value = '';
            contentTask.focus();
        }
    }

    function clickSelect() {
        const clickButton = document.getElementById('criar-tarefa');
        clickButton.addEventListener('click', taskList);
        console.log('oiiiiie');
    }
    clickSelect();

}