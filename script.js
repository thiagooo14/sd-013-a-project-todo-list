const input = document.getElementById("texto-tarefa");
const button = document.getElementById("criar-tarefa");
const lista = document.getElementById("lista-tarefas");
const item = document.getElementsByClassName('lista');

//Adicionando uma li
//Adicionando eventlistener 'click' para colorir

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
