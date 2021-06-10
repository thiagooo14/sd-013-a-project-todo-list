const btnInput = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const taskList = document.getElementsByTagName('ol')[0];


btnInput.onclick = () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText.value;
  taskList.appendChild(taskItem);
  const listItem = document.getElementsByTagName('li');
  for (let index = 0; index < listItem.length; index++) {

    listItem[index].addEventListener('click', () => {

    for (let j = 0; j < listItem.length; j += 1) {
      if ((listItem[j].className === 'select') || (listItem[j].className === 'completed select')) {
      listItem[j].classList.remove('select');
      } 
    };

    listItem[index].classList.add('select');
  
    listItem[index].addEventListener('dblclick', () => {
      if (listItem[index].className === 'select') {
        listItem[index].classList.add('completed');
        listItem[index].classList.remove('select');
      } else if (listItem[index].className === 'completed select') {
        listItem[index].classList.remove('completed');
        listItem[index].classList.remove('select');
      }
      
    });

    }); 
  }
  taskText.value = '';
};

/*  */

