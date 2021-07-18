// 2
const ulList = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map((el) => {
  const li = document.createElement('li');
  li.innerHTML = `<p> ${el} </p>`;
  return li;

});
ulList.append(...ingredientsEl);

// 3

// 4
// const [decrement, span, increment] = document.querySelector(‘#counter’).children


const [buttonDec, value, buttonInc] = document.querySelector(
  "#counter"
).children;


const increment = () => (value.textContent = +value.textContent + 1);

const decriment = () => (value.textContent -= 1);


buttonInc.addEventListener("click", increment);
buttonDec.addEventListener("click", decriment);
