var addButton = document.getElementById('criar-tarefa');

var task = document.querySelector('#texto-tarefa');

var taskList = document.querySelector('#lista-tarefas');

var lastMarked = null;

var onButtonClick = function() {
  if (task.value.length > 0) {
    var newTask = document.createElement('li');
    newTask.innerHTML = task.value;
    //console.log(getTextWidth(task.value));
    newTask.style.width = getTextWidth(task.value);
    newTask.style.margin = '10px';
    //newTask.style.width = ;
    taskList.appendChild(newTask);
    //console.log(task.value.width);
    task.value = '';
  }
};

var onItem = function(e) {
    if(e.target.tagName === "LI"){
        if(lastMarked != null){
            lastMarked.style.backgroundColor = 'white';
        }
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
        lastMarked = e.target;
    }
}

var checkedItem = function(e) {
    console.log("aqui",e.target);
    //newTask.classList.add('completed');
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('completed');
        console.log("aqui AAAAA",e.target);
    }
}

addButton.addEventListener("click",onButtonClick);

taskList.addEventListener("click", onItem);

taskList.addEventListener("dblclick", checkedItem);



function getTextWidth(text, font) {
    console.log(text.length);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    context.font = font || getComputedStyle(document.body).font;
    
    let pxSize = (Math.round(context.measureText(text).width * 1.8)).toString();
    return pxSize.concat('px');
  }