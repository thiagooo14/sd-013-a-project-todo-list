const input = document.getElementById("texto-tarefa");
const button = document.getElementById("criar-tarefa");
const lista = document.getElementById("lista-tarefas");
const item = document.getElementsByClassName('lista');

//Adicionando uma li 
function criarTarefa() {
  const element = input.value;
  const li = document.createElement('li');
  li.addEventListener('click', colorBackground);
  li.innerText = element;
  lista.appendChild(li);
  input.value = null;
  
};
button.addEventListener("click", criarTarefa);




//Colorir background da li quando clicado
function colorBackground(event) {
  for(let i = 0; i < item.length; i += 1){
    item[i].classList.remove('selected');
  }
    event.target.classList.add('selected'); 
}
