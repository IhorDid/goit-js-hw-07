// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const colorSpan = document.querySelector('.color');
// const changeColorBtn = document.querySelector('.change-color');

// changeColorBtn.addEventListener('click', () => {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// });

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

// console.log(btn);
// console.log(span);

btn.addEventListener('click', onButtonClick);
function onButtonClick(event) {
  span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = span.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
