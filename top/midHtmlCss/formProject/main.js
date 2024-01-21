const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const alertNoMatch = document.querySelector('.invalid');
passwordConfirmation.addEventListener('focusout', (ev) => {
  if (password.value.length >= 8)
    if (password.value != passwordConfirmation.value)
      alertNoMatch.style.visibility = "visible";
    else
      alertNoMatch.style.visibility = "hidden";
})