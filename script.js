
function questionOne() {
  const header = document.createElement('header');
  const h3 = document.createElement('h3');
  h3.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h3);
  document.body.appendChild(header);
}
questionOne();

function questionTwo() {
  const p = document.createElement('p');
  p.setAttribute('id', 'funcionamento');
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  document.body.appendChild(p);
}
questionTwo();

function questionThree() {
  let div = document.createElement('div')
  let input = document.createElement('input');
  let button = document.getElementById('criar-tarefa');
  input.setAttribute('id', 'texto-tarefa');
  input.setAttribute('type', 'input');

  div.appendChild(input);
  div.appendChild(button);
  document.body.appendChild(div);
}
questionThree();

function questionFourFiveSixSeven() {
  const button = document.querySelector('#criar-tarefa');
  let textoTarefa = document.getElementById('texto-tarefa');
  let ol = document.getElementById('lista-tarefas')
  let div = document.createElement('div');


  button.addEventListener('click', (() => {
      let texto = textoTarefa.value;
      let li = document.createElement('li');
      li.innerText = texto;
      ol.appendChild(li);
      div.appendChild(ol);
      document.body.appendChild(div);
      if(texto != null || texto != undefined || texto != '') {
        document.getElementById('texto-tarefa').value = '';
      }
  }))
}
questionFourFiveSixSeven();

function questionEight() {
  let ol = document.querySelector('ol');
  let lis = document.getElementsByTagName('li');

    ol.addEventListener('click', ((event) => {
      for(let j = 0; j < lis.length; j += 1) {
        let onlyLi = lis[j];
        onlyLi.style.backgroundColor = '';
      }
      ol.style.display = 'inline-block';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }))
}
questionEight();

function questionNine() {
  let ol = document.querySelector('ol');
  let lis = document.getElementsByName('li')

  ol.addEventListener('dblclick', ((event) => {
    if(event.target.classList.contains('completed')) {
      event.target.classList.remove('completed')
    } else {
      event.target.classList.add('completed')
    }
  }))
}
questionNine();

function questionTen() {
  let apagaTudo = document.getElementById('apaga-tudo');
  let div = document.querySelector('div');
  let ol = document.querySelector('ol');
  let li = document.querySelector('li')
  div.appendChild(apagaTudo);

  apagaTudo.addEventListener('click', (() => {
    ol.remove(li);

  }))
}
questionTen();

function questionEleven() {
  let remover = document.getElementById('remover-finalizados');
  let div = document.querySelector('div')
  let lis = document.getElementsByTagName('li')
  let ol = document.querySelector('ol')
  div.appendChild(remover);
  remover.addEventListener('click', (() => {
    for(let i = 0; i < lis.length; i += 1) {
      let li = lis[i]
      let liCompleted = li.classList.contains('completed');
      if(liCompleted) {
        li.remove(liCompleted)
      }
    }
  }))
}
questionEleven();
