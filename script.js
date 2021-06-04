// Requisito 5 e 6

const selectButton = document.getElementById('criar-tarefa');

selectButton.addEventListener('click', () => {
  const createTask = document.getElementById('texto-tarefa');
  const valueInput = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  const ol = document.querySelector('#lista-tarefas');
  li.innerHTML = valueInput;
  ol.appendChild(li);
  createTask.value = '';
});

// Requisito 7
// Desenvolvido com a ajuda do estudante Trybe Thiago Carboneri
function selectedClass() {
  const getOl = document.querySelector('ol');
  getOl.addEventListener('click', (event) => {
    const getLi = document.getElementsByTagName('li');
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

selectedClass();
