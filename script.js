const input = document.getElementById("texto-tarefa");
const button = document.getElementById("criar-tarefa");
const lista = document.getElementById("lista-tarefas");

//Adicionando uma li 
function criarTarefa() {
  const element = input.value;
  const li = document.createElement('li');
  li.innerText = element;
  lista.appendChild(li);
  input.value = null;
};
button.addEventListener("click", criarTarefa);
