// butao de add da lista

const lista = document.getElementById('lista-tarefas');
const butao = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');

butao.addEventListener('click', addTarefa);
tarefa.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && tarefa.value.length > 0) {
    addTarefa();
    //gostei dessa funssaum de colocar enter, testar mais depois
  }
});

function addTarefa() {
  const texto = document.createElement('li');
  lista.appendChild(texto);
  texto.innerText = tarefa.value;
  texto.classList = "tar"
  tarefa.value = "";
  selecao ();
}

// cores ao clicar

const lis = document.getElementsByClassName('tar');

// Aqui a f:selecao aciona para tirar a selecão de todos
function desSelec() {
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].classList.remove('selected');
  }
}

// Aqui a f:selecao adiciona um event listener que ao clicar aciona f:desSelec e adiciona selected na posição selecionada
function selecao() {
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].addEventListener('click', selec)

    function selec() {
      desSelec();
      lis[i].classList.add('selected');
    }
  }
}

