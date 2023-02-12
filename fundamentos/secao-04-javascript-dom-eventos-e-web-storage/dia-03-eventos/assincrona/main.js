const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const addClassTech = (event) => {
  const tech = document.getElementsByClassName('tech');
  const previousTech = tech[0];
  const removeClass = previousTech.classList;
  removeClass.remove('tech');
  const clickedItem = event.target;
  clickedItem.classList.add('tech');
}

const addEventInListItems = () => {
  const listItems = document.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', addClassTech)
  }
}
addEventInListItems()

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const changeTechText = () => {
  const tech = document.getElementsByClassName('tech')[0];
  const input = document.getElementById('input');
  const contentInput = input.value;
  tech.innerText = contentInput;
}
const inputTech = document.getElementById('input');
inputTech.addEventListener('keyup', changeTechText)

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

const addPortfolioLink = () => {
  window.location.replace('https://enzogennarii.github.io/')
};

const top3Text = document.getElementById('my-spotrybefy');
top3Text.addEventListener('dblclick', addPortfolioLink);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

const changeColorOnMouseOver = (event) => {
  const itemOnMouseOver = event.target;
  itemOnMouseOver.style.color = 'lightBlue';
};

const changeColorOnMouseOut = (event) => {
  const itemOnMouseOut = event.target;
  itemOnMouseOut.style.color = 'unset';
};

top3Text.addEventListener('mouseover', changeColorOnMouseOver)
top3Text.addEventListener('mouseout', changeColorOnMouseOut)

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  event.target.innerText = 'Opção reiniciada';
}
const addEventResetText = () => {
  const itemList = document.getElementsByTagName('li');
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('dblclick', resetText);
  }
}
addEventResetText();

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.