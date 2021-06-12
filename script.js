/* eslint-disable no-restricted-globals */
/* eslint-disable quotes */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */


// desafio 5 e 6
function addTarefa() {
  const ol = document.querySelector('#lista-tarefas');
  const novaTarefa = document.createElement('li');
  const textT = document.querySelector('#texto-tarefa');

  const texto = textT.value;
  novaTarefa.innerText = texto;
  ol.appendChild(novaTarefa);
  textT.value = '';
}


// desafio 7
function mudaBackground() {
  let lis = document.getElementsByClassName('li');
  let lista = document.querySelector('ol');

  lista.addEventListener('click', function(evento) {
    for (let index = 0; index < lis.length; index += 1) {
      let liclick = lis[index];
      liclick.style.backgroundColor = "";
    }
    evento.target.style.backgroundColor = "rgb(128,128,128)";
  });
}
mudaBackground()

// Desafio 10
// metodo location.reload retirado da URL: https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload

let apagar = document.querySelector('#apaga-tudo');
apagar.addEventListener('click', function () {
  location.reload();
});