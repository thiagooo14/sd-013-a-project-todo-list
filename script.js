
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
      for(let lis of topicList){              
        lis.classList.remove('selected');
        e.target.classList.add('selected');
  }   
  }  
  
  list.addEventListener('click',changeTopicColor);
  
  function crossLine(e){

      if(e.target.classList.contains('completed') == true){
        e.target.classList.remove('completed');
      }else{
        e.target.classList.add('completed');      
    }    
  }  

  list.addEventListener('dblclick', crossLine);

  let eraseAll = document.querySelector('#apaga-tudo');

  function eraseAllTasks(){
    const listTask = document.querySelectorAll('.list');
    if(listTask.length != 0){
      list.textContent = '';
    }
  }

  eraseAll.addEventListener('click', eraseAllTasks);

  eraseOkTasks = document.querySelector('#remover-finalizados');

  function bttEraseOkTasks(e){ 
    const listTask = document.querySelectorAll('.completed');
    if(listTask.length != 0){
      for(let lis of listTask){
        list.removeChild(lis);
      }
    }
  }

  eraseOkTasks.addEventListener('click', bttEraseOkTasks);