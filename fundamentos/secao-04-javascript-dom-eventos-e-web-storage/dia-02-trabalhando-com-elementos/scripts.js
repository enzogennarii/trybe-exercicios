// Exercícios Aula Assíncrona

const elementoOndeEsta = document.getElementById('elementoOndeVoceEsta');

const paiDoElementoOndeEsta = elementoOndeEsta.parentNode;
paiDoElementoOndeEsta.style.color = 'red';

const fstFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro Filho do Filho';

const fstFilhoDePai = document.getElementById('pai').firstElementChild;
fstFilhoDePai.innerText = 'Primeiro Filho do Pai';

const fstFilhoDeOndeEsta = elementoOndeEsta.previousElementSibling;

const atencaoDeOndeEsta = elementoOndeEsta.nextSibling;

const trdFilhoDeOndeEsta = elementoOndeEsta.nextElementSibling;
trdFilhoDeOndeEsta.innerText = 'Terceiro Filho - Elemento de onde está';

const trdFilhoDePai = paiDoElementoOndeEsta.children[2];
trdFilhoDePai.innerText = 'Terceiro Filho de pai';
