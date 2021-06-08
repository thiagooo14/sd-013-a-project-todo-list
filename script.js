const btnAdd = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

btnAdd.addEventListener('click', function(){
  const itemList = document.createElement('li');
  itemList.innerText = inputText.value;
  lista.appendChild(itemList);
  inputText.value = "";

  // Evento para pintar o fundo do texto:
  let liList = document.getElementsByTagName('li');

  for (let i = 0; i < liList.length; i += 1) {
    liList[i].addEventListener('click', function(){
      for (let j = 0; j < liList.length; j += 1) {
        liList[j].style.backgroundColor = 'white';
      }
      liList[i].style.backgroundColor = 'rgb(128,128,128)';
    })

  }

  // Evento para riscar o texto:
   itemList.addEventListener('dblclick', function(){
     if (itemList.style.textDecoration = 'none') {
       itemList.style.textDecoration = 'line-through';
     }
     // Evento para desriscar o texto:
     itemList.addEventListener('dblclick', function(){
       if (itemList.style.textDecoration = 'line-through') {
       itemList.style.textDecoration = 'none';
      }
     })  
  })
})

