const nombreInput = document.getElementById('nombre-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaAmigos = document.getElementById('lista-amigos');
const sortearBtn = document.getElementById('sortear-btn');
const resultadoDiv = document.getElementById('resultado');

let amigos = [];

adicionarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }
  amigos.push(nombre);
  const li = document.createElement('li');
  li.textContent = nombre;
  listaAmigos.appendChild(li);
  nombreInput.value = '';
});

sortearBtn.addEventListener('click', () => {
  if (amigos.length === 0) {
    alert('Agrega amigos a la lista antes de sortear.');
    return;
  }
  const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
  resultadoDiv.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
});
