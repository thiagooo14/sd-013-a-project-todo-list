function firstQuestion() {
  let h1 = document.createElement("h1");
  h1.innerText = "Minha Lista de Tarefas";
  let header = document.createElement("header");
  header.appendChild(h1);
  document.body.appendChild(header);
}
firstQuestion()