//Variaveis
const listaTarefa = document.getElementById('lista-tarefas');
var lis = document.getElementsByTagName('li');
var completadas = document.getElementsByClassName('completed');

//Botao 'Adicionar'
const button = document.createElement('button');
button.id = 'criar-tarefa';
const posicaoBotao = document.querySelector('#section-text');
button.innerHTML = "Adicionar";
posicaoBotao.appendChild(button);

//Botao 'Apagar todas as tarefas'
const button2 = document.createElement('button');
button2.id = 'apaga-tudo';
button2.innerHTML = "Apagar todas as tarefas";
posicaoBotao.appendChild(button2);

//Botao 'Remover tarefas finalizadas'
const button3 = document.createElement('button');
button3.id = 'remover-finalizados';
button3.innerHTML = "Remover tarefas finalizadas";
posicaoBotao.appendChild(button3);

//Botao 'Salvar Tarefas'
const button4 = document.createElement('button');
button4.id = 'salvar-tarefas';
button4.innerHTML = "Salvar Tarefas";
posicaoBotao.appendChild(button4);

// Funcao para adicionar tarefas
function adicionarLista() {    
    let listaTarefa = document.getElementById('lista-tarefas');
    button.addEventListener('click', function() {
        let texto = document.getElementById('texto-tarefa').value;
        var lista = document.createElement('li');
        listaTarefa.appendChild(lista);
        lista.innerHTML = texto;
        document.getElementById('texto-tarefa').value = '';     
    })
}

// Funcao para adicionar cor de fundo cinza em um item clicado
function corDeFundo(event) {
  let elementoClicado = event.target;
  var itensTarefa;
  elementoClicado.classList.add('listaClicado');
  itensTarefa = document.getElementsByClassName('listaClicado');
    for (let index = 0; index < itensTarefa.length; index += 1) {
          itensTarefa[index].classList.remove('corCinza');
          itensTarefa[index].classList.add('corBranca');
       }
  let elementoClicado2 = event.target;
   elementoClicado2.classList.remove('corBranca');
   elementoClicado2.classList.add('corCinza');
}

// Funcao para riscar tarefas completas
function linhaRiscada(event) {
    let elementoClicado = event.target;
       if (elementoClicado.classList.contains('completed')) {
           elementoClicado.classList.remove('completed');
    } else {
        elementoClicado.classList.add('completed');
    }
}

// Funcao para apagar todas as tarefas
function apagarTodasTarefas() {
    listaTarefa.textContent = ' ';
}

//Funcao para apagar tarefas finalizadas
function tarefasFinalizadas() {
    listaTarefa.querySelectorAll('.completed').forEach(n => n.remove());
}

//Funcao para salvar as tarefas
function salvarTarefas() {
    localStorage.setItem('listaSalva', listaTarefa.innerHTML);
}

//Funcao para carregar as tarefas salvas
function carregarTarefas() {
    if (localStorage.getItem('listaSalva')) {
        listaTarefa.innerHTML = localStorage.getItem('listaSalva');
    }
}

//Funcoes e eventos a serem executados na pagina
adicionarLista();
carregarTarefas();
listaTarefa.addEventListener('click', corDeFundo);
listaTarefa.addEventListener('dblclick', linhaRiscada);
button2.addEventListener('click', apagarTodasTarefas);
button3.addEventListener('click', tarefasFinalizadas);
button4.addEventListener('click', salvarTarefas);