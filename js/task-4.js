const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  loginForm.reset();
});
