let textoDigitado = document.getElementById('texto-tarefa');
let botao = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let item = document.getElementsByClassName('lista');

function adicionarTarefa() {
  let li = document.createElement('li');
  li.classList = 'lista';
  li.innerText = textoDigitado.value;
  li.addEventListener('click', paintBack);
  li.addEventListener('dblclick', riscar);
  lista.appendChild(li);
  textoDigitado.value = '';
}
function paintBack(event) {
  for(let i =0; i < item.length; i += 1){
  item[i].classList.remove('selected');
  }
  event.target.classList.add('selected'); 
}

function riscar(event) {
  
  if (event.target.classList.contains('completed')){
  event.target.classList.remove('completed');
  } else {
  event.target.classList.add('completed');
  }
  event.target.classList.remove('selected');
  } 


botao.addEventListener('click', adicionarTarefa);
