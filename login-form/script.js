const inputUsernameButton = document.getElementById('input-username-button');
const inputPasswordButton = document.getElementById('input-password-button');
const togglePasswordButton = document.getElementById('toggle-password-button');
const usernameInput = document.getElementById('input-username');
const passwordInput = document.getElementById('input-password');

inputUsernameButton.addEventListener('mousedown', (event) => {
    event.preventDefault();
    usernameInput.focus();
});

inputPasswordButton.addEventListener('mousedown', (event) => {
    event.preventDefault();
    passwordInput.focus();
});

togglePasswordButton.addEventListener('mousedown', (event) => {
    event.preventDefault();
    passwordInput.focus();
});

togglePasswordButton.addEventListener('click', function () {
    const newType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', newType);

    this.classList.toggle('bxs-show');
    this.classList.toggle('bxs-hide');
});