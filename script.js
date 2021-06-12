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
  const div = document.createElement('div');
  const input = document.createElement('input');
  const button = document.getElementById('criar-tarefa');
  input.setAttribute('id', 'texto-tarefa');
  input.setAttribute('type', 'input');
  input.setAttribute('placeholder', 'Digite Sua Tarefa');

  div.appendChild(input);
  div.appendChild(button);
  document.body.appendChild(div);
}
questionThree();

function questionFourFiveSixSeven() {
  const button = document.querySelector('#criar-tarefa');
  const textoTarefa = document.getElementById('texto-tarefa');
  const ol = document.getElementById('lista-tarefas');
  const div = document.createElement('div');
  button.addEventListener('click', (() => {
    const texto = textoTarefa.value;
    const li = document.createElement('li');
    li.innerText = texto;
    ol.appendChild(li);
    div.appendChild(ol);
    document.body.appendChild(div);
    if ((texto !== null) || (texto !== undefined) || (texto !== '')) {
      document.getElementById('texto-tarefa').value = '';
    }
  }));
}
questionFourFiveSixSeven();
function questionEight() {
  const ol = document.querySelector('ol');
  const lis = document.getElementsByTagName('li');

  ol.addEventListener('click', ((event) => {
    for (let j = 0; j < lis.length; j += 1) {
      const onlyLi = lis[j];
      onlyLi.style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }));

}
questionEight();

function questionNine() {
  const ol = document.querySelector('ol');

  ol.addEventListener('dblclick', ((event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }));
}
questionNine();

function questionTen() {
  const apagaTudo = document.getElementById('apaga-tudo');
  const div = document.querySelector('div');
  const ol = document.querySelector('ol');
  div.appendChild(apagaTudo);

  apagaTudo.addEventListener('click', (() => {
      ol.innerHTML = null
  }));
}
questionTen();

function questionEleven() {
  const button = document.getElementById('remover-finalizados');
  const div = document.querySelector('div');
  div.appendChild(button);

  button.addEventListener('click', (() => {
    const lis = document.querySelectorAll('.completed')
    const ol = document.querySelector('ol');
    for (let i = 0; i < lis.length; i += 1) {
      const li = lis[i]
      ol.removeChild(li);
    }
  }));
}
questionEleven();
