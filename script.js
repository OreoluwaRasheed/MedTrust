const showPassword = document.querySelector('#hide-password');
const passwordField = document.querySelector('#password');

showPassword.addEventListener('click', function(){
    this.classList.toggle("fa-eye");
    const type = passwordField.getAttribute('type')=== 'password' ? 'text': 'password'
    passwordField.setAttribute('type',type)
})