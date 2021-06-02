var main = document.querySelector('main');

inputCreator();
listOlCreator ();

function inputCreator(){
  // Cria o botão input Text abaixo
  var inputText = document.createElement("INPUT");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("id", "texto-tarefa");
  main.appendChild(inputText);
  //// Cria o botão Adicionar embaixo
  var inputSub = document.createElement("button");
  inputSub.setAttribute("id", "criar-tarefa");
  inputSub.innerText = "ADICIONAR";
  textFunc(inputSub);
}

// Cria a OL onde vai receber a lista das tarefas
function listOlCreator() {
  var listOl = document.createElement("ol");
  listOl.setAttribute("id", 'lista-tarefas');
  main.appendChild(listOl);
}

function textFunc(inputSub){
  main.appendChild(inputSub);

  inputSub.addEventListener('click', () => {
  const li = document.createElement('li');
  const criarTarefa = document.getElementById('lista-tarefas');
  const texto = document.createTextNode(document.getElementById('texto-tarefa').value)
  li.appendChild(texto);

  criarTarefa.appendChild(li);

  const limpador = document.getElementById('texto-tarefa').value = '';
   } );
}






