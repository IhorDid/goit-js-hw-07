// const input = document.querySelector('input');
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');

// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);

// function destroyBoxes() {
//   boxesContainer.innerHTML = '';
// }

// function createBoxes() {
//   const amount = Number.parseInt(input.value);
//   if (amount < 1 || amount > 100) {
//     return;
//   }
//   destroyBoxes();
//   let boxesHTML = '';
//   for (let i = 0; i < amount; i++) {
//     const size = 30 + i * 10;
//     const color = getRandomHexColor();
//     boxesHTML += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
//   }

//   boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
//   input.value = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const ref = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
};

ref.btnCreate.addEventListener('click', onBtnCreateClick);
ref.btnDestroy.addEventListener('click', destroyBoxes);

function onBtnCreateClick(event) {
  const amount = Number(ref.input.value);
  if (amount > 1 || amount < 100) {
    destroyBoxes(event);
    const boxArr = [];
    for (let i = 0; i < amount; i += 1) {
      boxArr.push(createBoxes(i));
    }
    ref.input.value = '';
    ref.divBoxes.append(...boxArr);
    return;
  }
  alert('1-100');
}

function destroyBoxes(event) {
  ref.divBoxes.innerHTML = '';
}

function createBoxes(amount) {
  const box = document.createElement('div');
  box.style.width = `${30 + amount * 10}px`;
  box.style.height = `${30 + amount * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
