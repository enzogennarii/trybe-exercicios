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


const pai = document.getElementById('pai');
const irmaoOndeEsta = document.createElement('section');
irmaoOndeEsta.innerText = 'Sou o irmão de onde está';
irmaoOndeEsta.id = 'irmao-do-elemento-onde-esta';
pai.appendChild(irmaoOndeEsta);

const filhoDeOndeEsta = document.createElement('section');
filhoDeOndeEsta.id = 'sou-um-filho-do-elemento-onde-esta';
filhoDeOndeEsta.innerText = 'Filho Criado do Elemento onde está';
elementoOndeEsta.appendChild(filhoDeOndeEsta);


const elementoASerRemovido = document.querySelector('h2');
elementoOndeEsta.removeChild(elementoASerRemovido);
