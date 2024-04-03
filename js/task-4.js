// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const emailInput = loginForm.elements['email'];
//   const passwordInput = loginForm.elements['password'];

//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value.trim();

//   if (!emailValue || !passwordValue) {
//     return alert('All form fields must be filled in');
//   }

//   const formData = {
//     email: emailValue,
//     password: passwordValue,
//   };

//   console.log(formData);
//   loginForm.reset();
// });
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget);

  const formData = new FormData(event.currentTarget);
  const formValue = {};

  formData.forEach((value, name) => {
    const trimValue = value.trim();
    formValue[name] = trimValue;
  });
  console.log(formValue);

  // * Простий спосіб отримання зачень форми
  // const formElement = event.currentTarget.elements;
  // const email = formElement.email.value;
  // const password = formElement.password.value;
  // const formData = {
  //   email,
  //   password,
  // };
  // if (!formData.email || !formData.password) {
  //   return alert('All form fields must be filled in');
  // }
  // console.log(formData);
}
