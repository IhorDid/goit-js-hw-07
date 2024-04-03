// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

// nameInput.addEventListener('input', () => {
//   const inputValue = nameInput.value.trim();
//   nameOutput.textContent = inputValue || 'Anonymous';
// });

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('h1 > span');
inputEl.addEventListener('input', onInputText);
function onInputText(event) {
  console.log(event.currentTarget.value.trim());
  spanEl.textContent = event.currentTarget.value || 'Anonymous';
}
console.log(inputEl);
console.log(spanEl);
