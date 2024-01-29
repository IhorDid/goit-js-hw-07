const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number.parseInt(input.value);
  if (amount < 1 || amount > 100) {
    return alert('Please enter  1 to 100');
  }

  let boxesHTML = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
