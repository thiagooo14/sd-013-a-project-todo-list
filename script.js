function firstQuestion() {
  let h1 = document.createElement("h1");
  h1.innerText = "Minha Lista de Tarefas";
  let header = document.createElement("header");
  header.appendChild(h1);
  document.body.appendChild(header);
}
firstQuestion()

function secondQuestion() {
  let p = document.createElement("p");
  p.innerText = "Clique duas vezes em um item para marcá-lo como completo";
  p.setAttribute("id", "funcionamento");
  let header = document.querySelector("header");
  header.appendChild(p);
}
secondQuestion()
