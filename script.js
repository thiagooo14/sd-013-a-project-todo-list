
  let buttonAddTask = document.getElementById("criar-tarefa");
  let inputText = document.getElementById('texto-tarefa');
  let list = document.getElementById('lista-tarefas');
 
  function addTask(text){
    text = inputText;
    let li = document.createElement('li');
    li.className = "list";
    li.innerText = inputText.value;
    li.backgroundColor = 'white';
    list.appendChild(li);
    inputText.value = '';
}

  buttonAddTask.addEventListener('click', addTask);

  //const topicList = document.querySelectorAll('.list');

  function changeTopicColor(e){      
  const topicList = document.querySelectorAll('.list');

    for(let aa of topicList){        
      
     aa.classList.remove('selected');
      console.log(aa);
  }   e.target.classList.add('selected');
  }  
  
  list.addEventListener('click',changeTopicColor);
  

  
