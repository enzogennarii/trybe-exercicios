// Exercícios Aula Assíncrona

const elementoOndeEsta = document.getElementById('elementoOndeVoceEsta');

const paiDoElementoOndeEsta = elementoOndeEsta.parentNode;
paiDoElementoOndeEsta.style.color = 'purple';

const fstFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro Filho do Filho';

const fstFilhoDePai = document.getElementById('pai').firstElementChild;
fstFilhoDePai.innerText = 'Primeiro Filho do Pai';

const fstFilhoDeElementoOndeEsta = elementoOndeEsta.previousSibling;
fstFilhoDeElementoOndeEsta.innerText = 'Primeiro Filho, vindo do elementoOndeVoceEsta';




