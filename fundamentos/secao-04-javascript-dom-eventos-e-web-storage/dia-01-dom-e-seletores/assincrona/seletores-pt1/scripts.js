// Exercícios - Seletores de Elementos

const pageTitle = document.getElementById('page-title');
pageTitle.innerHTML = 'Vingadores: Ultimato';

const firstParagraph = document.getElementsByClassName('paragraphs')[0];
firstParagraph.style.color = 'blue';

const subtitle = document.getElementById('subtitle').innerText = 'não faço ideia do que escrever aqui';

const secondParagraph = document.getElementById('second-paragraph').innerText = 'não sou muito criativo';

firstParagraph.className = 'paragraphs';
secondParagraph.className = 'paragraphs';

const allParagraphs = document.getElementsByClassName('paragraphs');

const colorSubtitle = document.getElementsByTagName('h4')[0];
colorSubtitle.style.color = 'red';
