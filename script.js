function adicionaCor(evento) { // funcao para adicionar cor ao li clicado
  const elementoClicado = evento.target; // guardei numa variavel o exato local onde houve o evento click
  const todosLi = document.querySelectorAll('.cor-li'); // recuperando todos os elementos que possuem a classe cor-li
  for (let i = 0; i < todosLi.length; i += 1) { // usei o for para percorrer todos os elementos que possuem a classe cor-li atibuida na variavel acima
    const posicaoLi = todosLi[i]; // guardei numa variavel a posicao de cada item percorrido pelo for
    if (posicaoLi.classList.contains('clicado')) { // criei um if para caso a variavel contiver a classe clicado
      posicaoLi.classList.remove('clicado'); // remover a classe clicado para que somente um item possa ter a classe por vez e assim a cor so exista em 1 elemento
    }
  }
  elementoClicado.classList.add('clicado'); // adicionado ao item clicado a classe.
}
function adicionaRisco(evento) { // funcao para adicionar o risco no elemento apos o click duplo
  evento.target.classList.toggle('completed'); // se o elemento clicado (local especifico) tiver a claase completed, tira, se nao tiver, adiciona, com o toggle
}
const button = document.querySelector('#criar-tarefa'); // recuperando o ID
// Adiciona addEventListener:
button.addEventListener('click', () => {
  // Guarda o texto que foi digitado no input:
  const input = document.querySelector('#texto-tarefa');
  const texto = input.value;
  // Cria o li:
  const novaLi = document.createElement('li');
  novaLi.innerHTML = texto;
  // Adicona classe a li:
  novaLi.classList.add('cor-li');
  novaLi.addEventListener('click', adicionaCor); // da a variavel o escutador que recebe o click e a funcao de adicionaCor (linha1)
  novaLi.addEventListener('dblclick', adicionaRisco); // da a variavel o escutador que recebe o duplo click e a funcao adicionaRisco (linha12)
  const lista = document.getElementById('lista-tarefas'); // atribue a variavel o ID recuperado
  lista.appendChild(novaLi); // adiciona a variavel criada acima a varivael novaLi que so tinha sido criada (linha 22)
  input.value = ''; // limpa o que foi digitado no input
});

function apagaLista() {
  const buttonDelete = document.querySelector('#apaga-tudo');
  buttonDelete.addEventListener('click', () => {
    const listaUl = document.querySelector('ol');
    listaUl.innerHTML = '';
  });
}
apagaLista();
