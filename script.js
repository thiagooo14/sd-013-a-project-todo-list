//Variaveis
var listaTarefa = document.getElementById('lista-tarefas');
var lis = document.getElementsByTagName('li');
var completadas = document.getElementsByClassName('completed');

//Botao 'Adicionar'
let button = document.createElement('button');
button.id = 'criar-tarefa';
posicaoBotao1 = document.querySelector('#section-text');
button.innerHTML = "Adicionar";
posicaoBotao1.appendChild(button);

//Botao 'Apagar todas as tarefas'
let button2 = document.createElement('button');
button2.id = 'apaga-tudo';
posicaoBotao2 = document.querySelector('#section-text');
button2.innerHTML = "Apagar todas as tarefas";
posicaoBotao2.appendChild(button2);

//Botao 'Remover tarefas finalizadas'
let button3 = document.createElement('button');
button3.id = 'remover-finalizados';
posicaoBotao3 = document.querySelector('#section-text');
button3.innerHTML = "Remover tarefas finalizadas";
posicaoBotao3.appendChild(button3);

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

listaTarefa.addEventListener('click', corDeFundo);
listaTarefa.addEventListener('dblclick', linhaRiscada);
adicionarLista();
button2.addEventListener('click', apagarTodasTarefas);
button3.addEventListener('click', tarefasFinalizadas);