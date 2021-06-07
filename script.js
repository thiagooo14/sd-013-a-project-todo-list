let button = document.createElement('button');
button.id = 'criar-tarefa';
posicaoBotao1 = document.querySelector('#section-text');
button.innerHTML = "Adicionar";
posicaoBotao1.appendChild(button);

let button2 = document.createElement('button');
button2.id = 'apaga-tudo';
posicaoBotao2 = document.querySelector('#section-text');
button2.innerHTML = "Apagar todas as tarefas";
posicaoBotao2.appendChild(button2);

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

let listaTarefa = document.querySelector('#lista-tarefas');

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

function linhaRiscada(event) {
    let elementoClicado = event.target;
    var riscadoTarefas;
    elementoClicado.classList.add('listaClicado');
       if (elementoClicado.classList.contains('completed')) {
           elementoClicado.classList.remove('completed');
    } else {
        elementoClicado.classList.add('completed');
    }
}

function apagarTodasTarefas() {
    
}
   
listaTarefa.addEventListener('click', corDeFundo);
listaTarefa.addEventListener('dblclick', linhaRiscada);
adicionarLista();