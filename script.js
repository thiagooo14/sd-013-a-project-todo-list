const lista = document.getElementById('lista-tarefas');
const items = document.getElementsByClassName('item');

document.getElementById("criar-tarefa").onclick = function cria() {
  let text = document.getElementById('texto-tarefa').value;
  let li = document.createElement("li");
  let input = document.createTextNode(text);
  
  li.appendChild(input)
  lista.appendChild(li)

  li.classList.add('item');

  document.getElementById('texto-tarefa').value = null;

  selectItem();

}

function unSelectItems() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.remove('selected');
  }
}

function selectItem() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', function() {
      unSelectItems();
      items[i].classList.add('selected');
    });
  }
}


function completa(evento){
  const completou = evento.target;
  if (completou.classList.contains('item')){
    if (completou.classList.contains('completed')){
      completou.classList.remove('completed');
    } else {
      completou.classList.add('completed');
    }
  }

}




window.onload = function () {

  lista.addEventListener('dblclick', completa);

  document.getElementById('texto-tarefa').focus();

}



