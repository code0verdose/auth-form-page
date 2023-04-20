const pvBtn = document.querySelector(".pv-btn");
const passwordField = document.querySelector(".form__field_password");

pvBtn.addEventListener('click', (evt) => {
  evt.preventDefault()
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password'
})