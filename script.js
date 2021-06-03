// butao de add da lista

const lista = document.getElementById('lista-tarefas');
const butaoCriar = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');

function addTarefa() {
  const texto = document.createElement('li');
  lista.appendChild(texto);
  texto.innerText = tarefa.value;
  texto.classList = "tar"
  tarefa.value = "";
  selecao ();
}

butaoCriar.addEventListener('click', addTarefa);

tarefa.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && tarefa.value.length > 0) {
    addTarefa();
  }
});
    //gostei dessa funssaum de colocar enter, testar mais depois
 



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

// Adicionar a classe completed para riscar usando o css

function completo(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

lista.addEventListener('dblclick', completo)

// Buttaum de apagar tudo

const butaoApagar = document.getElementById('apaga-tudo');

butaoApagar.addEventListener('click', apagarTudo);

function apagarTudo() {
  lista.innerHTML = "";
}

// Buttaum de apagar finalizados

const butaoApagarFinalizados = document.getElementById('remover-finalizados')

function apagarFinalizados() {
  const completos = document.querySelectorAll('.completed')
  for (let i = 0; i < completos.length; i+=1) {
    lista.removeChild(completos[i])
  }
}

butaoApagarFinalizados.addEventListener('click', apagarFinalizados)
