window.onload = function() { 

    function taskList() {
        const contentTask = document.getElementById('texto-tarefa');
        const contentList = document.getElementById('lista-tarefas');
        const listItem = document.createElement('li');
        const taskNumbers = document.querySelectorAll('li');
        listItem.id = taskNumbers.length + 1;
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
        clickButton.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                console.log('Enter');
            }
        });
    }
    clickSelect();

    function paintTask() {
        const listItens = document.getElementById('lista-tarefas');
        listItens.addEventListener('click', function (c) {
            painting(c.target.id)
        });
    }
    paintTask();

    function painting(idList) {
        const item = document.querySelectorAll('li');
        for (let i = 0; i < item.length; i += 1) {
            if (item[i].id === idList) {
              document.getElementById(item[i].id).classList.add('itens-for-color');
            }else {
               document.getElementById(item[i].id).classList.remove('itens-for-color'); 
            };
        }
    }
    
    function completedTask() {
        const listI = document.getElementById('lista-tarefas');
        listI.addEventListener('dblclick', function (f) {
            risk(f.target.id)
        });
    }
    completedTask()

    function risk(done) {
        const itens = document.querySelectorAll('li');
        for (let i = 0; i < itens.length; i += 1) {
            if (itens[i].id === done) {
              document.getElementById(itens[i].id).classList.add('completed');
            }else {
               document.getElementById(itens[i].id).classList.remove('completed'); 
            };
        }
}
}