const input = document.getElementById("texto-tarefa");
const button = document.getElementById("criar-tarefa");
const lista = document.getElementById("lista-tarefas");
const item = document.getElementsByClassName('lista');

//Adicionando uma li
//Adicionando eventlistener 'click' para colorir
//Adicionando eventListener 'dblclick' pra riscar o item
function criarTarefa() {
  const element = input.value;
  const li = document.createElement('li');
  li.innerText = element;
  lista.appendChild(li);
  input.value = null;
  li.addEventListener('click', colorBackground);
  li.addEventListener('dblclick', riscarTarefa);
};
button.addEventListener("click", criarTarefa);

//Colorir background da li quando clicado
function colorBackground(event) {
  const task = document.getElementsByTagName('li');
  for (let i of task) {
    i.style.backgroundColor = null;
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

//Adicionando função pra riscar com duplo click
function riscarTarefa(event) {
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
    event.target.style.textDecoration = null;
  } else {
    event.target.classList.add('completed');
    event.target.style.textDecoration ='line-through';
  }
}