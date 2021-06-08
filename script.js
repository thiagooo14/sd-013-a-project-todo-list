const btnAdd = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

// Botão para adicionar:
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
  };

  // Evento para marcar e desmarcar o item:
  for (let i = 0; i < liList.length; i += 1) {
    liList[i].addEventListener('dblclick', function(){
        if (liList[i].style.textDecoration == 'none') {
          liList[i].classList.add('completed');
          liList[i].style.textDecoration = 'line-through';
        } else if (liList[i].style.textDecoration = 'line-through') {
          liList[i].classList.remove('completed');
          liList[i].style.textDecoration = 'none';
        }
    })  
  }

  // Botão para limpar lista:
  const btnLimpa = document.getElementById('apaga-tudo');
  btnLimpa.addEventListener('click', function() {
    document.location.reload();
  })
})
